 import React from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import {createStructuredSelector} from 'reselect';
import {selectcurrentUser} from './redux/UserReducer/User.selector';
import { connect } from 'react-redux';
import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import Shoppage from './Pages/Shoppage/Shoppage';
import Checkout from'./Pages/CheckoutPage/Checkout';
import Header from './Component/Header/Header';
import Signinup from './Pages/Sign-in-up-page/Signinup';
import { auth,createUserProfile } from './firebase/firebase.util.js';
import {actionUser} from './redux/UserReducer/ActionUser';
class App extends React.Component{

  unsubscribeFromAuth=null
  componentDidMount(){
   const {actionUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
      if(userAuth) {
        const userRef = await createUserProfile(userAuth);
        userRef.onSnapshot(snapShot=>{
          actionUser({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          })
        });
      }else{
        actionUser(userAuth)
      }
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return(
      <div>
        <Header/>
        <Switch>
        	<Route exact path='/' component={Homepage}/>
        	<Route path='/shop' component={Shoppage}/>
          <Route exact path='/signin' render={()=>this.props.currentUser ?(<Redirect to='/'/>):<Signinup/>}/>
          <Route exact path='/checkout' component={Checkout}/>
       </Switch>
      </div>
    )
  }
}

const mapStateToProps=createStructuredSelector({
  currentUser: selectcurrentUser
})
const mapDispatchToProps=(dispatch)=>({
    actionUser : (user)=>dispatch(actionUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);

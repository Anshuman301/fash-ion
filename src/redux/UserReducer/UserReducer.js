const initState={
	currentUser:null
}
const UserReducer=(state=initState,action)=>{
	switch(action.type){
		case "CHANGE_USER" :
			return {...state,currentUser:action.payload};

		default:
			return state;
	}
}

export default UserReducer;
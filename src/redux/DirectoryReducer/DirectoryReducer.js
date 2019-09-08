import sections from '../../directorydata'
const init={
	sections
}

const DirectoryReducer=(state=init,action)=>{
	switch(action.type){
		default:
			return state;
	}
}
export default DirectoryReducer;
const initState = {
    project:[
        {id : 1 , title : "Loading..."},
    ]
}
const projectReducer = (state = initState , action) => {
    switch(action.type){
        case "CREATE_PROJECT" :
            console.log(action.project);
            return state;
        case "CREATE_PROJECT_ERROR" : 
            console.log(action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer;
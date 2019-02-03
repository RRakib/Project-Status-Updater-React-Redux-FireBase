const initState = {
    project:[
        {id : 1 , title : "Design" , content : "Design for the login is done"},
        {id : 2 , title : "Design" , content : "Designing the admin panel"},
        {id : 3 , title : "Server" , content : "Database created"},
    ]
}
const projectReducer = (state = initState , action) => {
    if(action.type === "CREATE_PROJECT"){
        console.log(action.project)
    }
    return state;
}

export default projectReducer;
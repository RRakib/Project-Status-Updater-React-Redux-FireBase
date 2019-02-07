import authReducers from "./authReducers"
import projectReducer from "./projectReducer"
import { combineReducers } from "redux"
import { firestoreReducer } from "redux-firestore"

const rootReducer = combineReducers({
    auth : authReducers,
    project : projectReducer,
    firestore : firestoreReducer
})

export default rootReducer;
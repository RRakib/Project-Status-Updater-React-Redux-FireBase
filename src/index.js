import React from "react"
import App from "./App"
import ReactDOM from "react-dom"
import rootReducer from "./Store/Reducers/rootReducer"
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux";
import { reduxFirestore, getFirestore } from "redux-firestore"
import { reactReduxFirebase , getFirebase } from "react-redux-firebase"
import thunk from "redux-thunk"
import "./index.css"
import fbConfig from "./config/fbConfig"

const store = createStore(rootReducer , 
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase , getFirestore})),
        reduxFirestore(fbConfig),
        reactReduxFirebase(fbConfig)
    )
)

ReactDOM.render(<Provider store={store}><App/></Provider> , document.getElementById("root"));
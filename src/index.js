import React from "react"
import App from "./App"
import ReactDOM from "react-dom"
import rootReducer from "./Store/Reducers/rootReducer"
import { createStore, applyMiddleware } from "redux"
import { Provider } from "react-redux";
import thunk from "redux-thunk"
import "./index.css"

const store = createStore(rootReducer , applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}><App/></Provider> , document.getElementById("root"));
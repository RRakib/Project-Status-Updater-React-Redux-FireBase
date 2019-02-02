import React from "react"
import App from "./App"
import ReactDOM from "react-dom"
import rootReducer from "./Store/Reducers/rootReducer"
import { createStore } from "redux"
import { Provider } from "react-redux";
import "./index.css"

const store = createStore(rootReducer)

ReactDOM.render(<Provider store={store}><App/></Provider> , document.getElementById("root"));
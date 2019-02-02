import React from "react"
import App from "./App"
import ReactDOM from "react-dom"
import "./index.css"
import { createStore } from "redux"
import {Provider} from "react-redux";
import rootReducer from "./Store/Reducers/rootReducer"

const store = createStore(rootReducer)

ReactDOM.render(<Provider store={store}><App/></Provider> , document.getElementById("root"));
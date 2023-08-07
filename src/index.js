import React from 'react'
import {StrictMode} from 'react'
import ReactDOM from "react-dom"
import './style.css'
import App from './app'
// -----------{ROUTING}
import {BrowserRouter as Router} from "react-router-dom";


ReactDOM.render(
    <StrictMode>
        <Router>
        <App/>
        </Router>

    </StrictMode>,
     document.getElementById('root')

);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
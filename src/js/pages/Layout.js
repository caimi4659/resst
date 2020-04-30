
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class Layout extends Component {
   
    render() {

        return (
            <div ref="container">
               <Link to="/login">1111</Link>
            </div>
        );
    }
}

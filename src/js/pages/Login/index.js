
import React, { Component } from 'react';

export default class Login extends Component {
    componentDidMount() {
        let arr = [1,1,'1','1',null,null];
        let ts = Array.from(new Set(arr));
        console.log(ts);
    }

    render() {

        return (
            <div ref="container">
               2222
            </div>
        );
    }
}

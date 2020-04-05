import React, { Component } from 'react'
import { w3cwebsocket as W3CWebSocket } from "websocket";

const client = new W3CWebSocket('ws://127.0.0.1:8000');

class Bitcoin extends Component {

    componentWillMount() {
        client.onopen = () => {
          console.log('WebSocket Client Connected');
        };
        client.onmessage = (message) => {
          console.log(message);
        };
      }

    render(){
    return (
        <div>
            <h1>Bitcoin</h1>
        </div>
    );
}
}

export default Bitcoin;
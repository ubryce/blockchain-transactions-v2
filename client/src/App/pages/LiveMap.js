import React, {Component} from 'react'
import Iframe from 'react-iframe'
import IframeComponent from './iFrameComponent';


class LiveMap extends Component {
    constructor(props) {
        super(props);
        this.state = {
            src: 'https://whale-alert.io/transaction-map-embed.shtml',
            height: '100%',
            width: '100%',
            style: "border:0px #ffffff none;",
            scrolling: "no",
            frameborder: "1",
            marginheight: "0px",
            marginwidth: "0px",
        };
    }

    render() {
        return (
            <div className="App" style={{'height':600}}>
                <h1>Live Map</h1>
                <Iframe src={this.state.src} height={this.state.height} width={this.state.width} style={this.state.style} scrolling={this.state.scrolling} frameborder={this.state.frameborder} marginheight={this.state.marginheight} marginwidth={this.state.marginwidth}/>
            </div>
        );
    }
}

export default LiveMap;

import React, { Component } from 'react'

class API extends Component {
    state = {
        loading:true,
        transaction: null
    };
    
    async componentDidMount(){
        const url = '/api/getTransactions';
        const response = await fetch(url);
        const data = await response.json();
        this.setState({transaction: data, loading: false})
        //console.log(data);
    }
    render(){

    return (
        <div>
            Api Coming soon
        </div>
    );
}
}

export default API;
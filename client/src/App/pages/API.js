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
        <List>
            {this.state.transaction.map(el => {
                return (
                    <List.Item key={i}>
                        <List.Content>
                            
                        </List.Content>
                    </List.Item>
                )
            })}
        </List>
    );
}
}

export default API;
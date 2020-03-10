import React, { Component } from 'react';




class Transactions extends Component{
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

        if(!this.state.transaction){
            return <div>No recent transactions</div>
        }
        //console.log(this.state.transaction);
        const transactionsItems = this.state.transaction.map((transaction) =>
            <div>
            <li key={transaction.blockchain}>{transaction.blockchain} {transaction.amount_usd} {transaction.from.owner} {transaction.to.owner}</li>
            </div>
        );

        return (
            <div>
                {this.state.loading || !this.state.transaction ? 
                (<div>loading...</div> ): 
                (<div>
                    {transactionsItems}
                </div>)}
            </div>
        );
    }

}


export default Transactions;
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

        return (
            <div>
                <h1 id="title">Recent Blockchain Transactions</h1>
                {this.state.loading || !this.state.transaction ? 
                (<div>loading...</div> ): 
                (<div>

                    <table>
                        <thead>
                            <th>Blockchain</th>
                            <th>Quantity</th>
                            <th>USD</th>
                            <th>From</th>
                            <th>To</th>
                        </thead>
                        <tbody>
                            {this.state.transaction.map((transaction, i) => {
                                return (
                                    <tr key={i} style={{ textAlign: 'center', }}>
                                        <td><a style={{ textDecoration: 'none', color: 'black',}} href={'https://www.blockchain.com/btc/tx/' + transaction.hash}>{transaction.blockchain}</a></td>
                                        <td><a style={{ textDecoration: 'none', color: 'black' }} href={'https://www.blockchain.com/btc/tx/' + transaction.hash}>{transaction.amount}</a></td>
                                        <td><a style={{ textDecoration: 'none', color: 'black' }} href={'https://www.blockchain.com/btc/tx/' + transaction.hash}>{transaction.amount_usd}</a></td>
                                        <td><a style={{ textDecoration: 'none', color: 'black' }} href={'https://www.blockchain.com/btc/tx/' + transaction.hash}>{transaction.from.owner}</a></td>
                                        <td><a style={{ textDecoration: 'none', color: 'black' }} href={'https://www.blockchain.com/btc/tx/' + transaction.hash}>{transaction.to.owner}</a></td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>)}
            </div>
        );
    }

}


export default Transactions;
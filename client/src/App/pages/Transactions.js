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

    renderTableData() {
        return this.state.students.map((student, index) => {
           const { id, name, age, email } = student //destructuring
           return (
              <tr key={id}>
                 <td>{id}</td>
                 <td>{name}</td>
                 <td>{age}</td>
                 <td>{email}</td>
              </tr>
           )
        })
     }


    render(){

        if(!this.state.transaction){
            return <div>No recent transactions</div>
        }
        //console.log(this.state.transaction);
        const transactionsItems = this.state.transaction.map((transaction) =>
            <div>
            <li key={transaction.blockchain}>{transaction.blockchain} {transaction.amount} {transaction.amount_usd} {transaction.from.owner} {transaction.to.owner}</li>
            </div>
        );

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
                                    <tr key={i}>
                                        <td>{transaction.blockchain}</td>
                                        <td>{transaction.amount}</td>
                                        <td>{transaction.amount_usd}</td>
                                        <td>{transaction.from.owner}</td>
                                        <td>{transaction.to.owner}</td>
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
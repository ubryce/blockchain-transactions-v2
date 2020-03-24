const express = require('express');
const path = require('path');
const mongoose = require('mongoose')
const app = express();
const bodyParser = require('body-parser')
require('dotenv/config')
const WebSocket = require('ws');

const https = require('https');


app.use(bodyParser.json());

// import routes
const bitcoinRoute = require('./routes/bitcoin')
app.use('/bitcoin', bitcoinRoute);

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
	var list = ["item1", "item2", "item3"];
	res.json(list);
	console.log('Sent list of items');
});

//connect to database
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, ()=> 
	console.log("connected to DB")
);


//API request to blockchain API
app.get('/api/getTransactions', (req,res) => {
	const ends = Math.round((new Date()).getTime() / 1000);
	const starts = ends - 30000;
	const end = starts + 7600
	//console.log(ends);
	https.get(`https://api.whale-alert.io/v1/transactions?api_key=KtE5Gw2adzR9RT0SX8TGuF2e0k72Y1mq&min_value=500000&start=${String(starts)}&end=${String(end)}&cursor=2bc7e46-2bc7e46-5c66c0a7`, (resp) => {
		let data  = '';
		resp.on('data', (chunk) => {
		data += chunk;
		});

		resp.on('end', () => {
		var deta = {};
		deta = JSON.parse(data).transactions;
		res.json(deta);
		console.log("send list of transactions")
		});
	})
	.on('error', (err) => {
		console.log("err " + err.message);
	});
});

// create websocket
var ws = new WebSocket("wss://ws.blockchain.info/inv");

// websocket function
ws.on('open', function open(){
	ws.send(JSON.stringify({"op":"unconfirmed_sub"}));
})

// log data
ws.on('message', function incoming(data){
	console.log(data);
})

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
	res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);

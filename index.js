const port = 4000;
const https = require('https');
const express = require('express')
const app = express()
var cors = require('cors');
const bodyParser = require('body-parser');
const dbConfig = require('./config/dbconfig.js');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
dbConfig.connectdb();
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4000');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
    next();
});

app.get("/", (req,res) => {
	console.log("Responding to root access")
	res.send("Hello from ROOT!!!!!!!!")
})


require('./routes/router.js')(app);
app.listen(port,() => {
	console.log("NOTE:: Server is up and running on port",port);
})
const mongoose = require('mongoose');
var url='mongodb://localhost:27017/newApp';
mongoose.Promise = global.Promise;
module.exports = {
    

// Connecting to the database
connectdb:function(){
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");    
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});
}
}
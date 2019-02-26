// Import express
let express = require('express');
// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialize the app
let app = express();
// Import routes
let apiRoutes = require("./api");
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
let user = '';
let pass = '';
let host = '';
let dbName = '';
mongoose.connect(`mongodb://${user}:${pass}@${host}/${dbName}`);
var db = mongoose.connection;

// Setup server port
var port = process.env.PORT || 8080;
// Use Api routes in the App
app.use('/api', apiRoutes);
// Send message for default URL
app.get('/', (req, res) => res.send('Welcome to CardCreo Server!'));
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running CardCreo Server on port " + port);
});



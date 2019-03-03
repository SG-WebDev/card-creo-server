// Imports
let express = require('express');
let app = express();
let path = require('path');
let cors = require('cors');
let mongoose = require('mongoose');
let passport = require('passport');
let session = require('express-session');
let morgan = require('morgan');
let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser');

// Import routes
let apiRoutes = require("./routes/api");
let authRoutes = require("./routes/auth");

// set up our express application
app.use(cors()); // cors enabled
app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.json()); // get information from html forms
app.use(bodyParser.urlencoded({ extended: true }));

// Connect to DB
let user = '';
let pass = '';
let host = '';
let dbName = '';
mongoose.connect(`mongodb://${user}:${pass}@${host}/${dbName}`);
var db = mongoose.connection;

require('./config/passport')(passport);

// required for passport
app.use(session({
    secret: 'eminem', // session secret
    resave: true,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Routes
app.use('/api', apiRoutes);
app.use('/auth', authRoutes);

// Send message for default URL
app.get('/', (req, res) => res.send('Welcome to CardCreo Server!'));
// Launch app to listen to specified port
app.listen(3000);

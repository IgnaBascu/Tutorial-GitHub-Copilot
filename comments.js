// Create web server application using Node.js
// For more details about Node.js visit: http://nodejs.org/
//
// To run and test the server, open a terminal window and enter:
//   node comments.js
// You can then access the server in your browser at:
//   http://localhost:8080/comments.html
//
// Comments are stored in a MongoDB database
// To install MongoDB, see http://www.mongodb.org/
// To run MongoDB, open a terminal window and enter:
//   mongod
// Node.js connects to MongoDB using the following URL:
//   mongodb://localhost:27017/comments
// The database is named 'comments' and the collection is named 'comments'
//
// This server supports the following URLs:
//   GET /comments - returns all comments in the database
//   POST /comments - inserts a new comment into the database
//
// The server returns data in JSON format

// Load the modules we need
var http = require('http'); // http server core module
var express = require('express'); // web framework external module
var bodyParser = require('body-parser'); // parse JSON in POST requests
var mongoose = require('mongoose'); // MongoDB connection library
var app = express(); // web framework to handle routing requests
var server = http.createServer(app); // http server

// Configure our server with all the middleware and routing
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/')); // static files location

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/comments');

// Mongoose Schema definition
var Schema = mongoose.Schema;
var CommentSchema = new Schema({
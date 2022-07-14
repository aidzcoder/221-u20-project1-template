const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('client/public'));
app.use(bodyParser.json({type: 'application/json'}));

//allows it to connect to first controller for feedItem
let userController = require('./controller/feedController');

//creates route to website to localhost1337:/api/users
app.route('/api/users')
    .get((req,res) => {
        userController.getfeedItems(req, res);
    })
    .post((req, res)=> {
        userController.savefeedItems(req, res);
    })
//creates route with id
app.route('/api/users/:userId')
    .get((req, res) => {
        userController.getfeedItem(req, res);
    })
    .delete((req, res) => {
        userController.deletefeedItem(req, res);
    })
    .patch((req, res) => {
        userController.updatefeedItem(req, res);
    })
// allows it connect to my second controller which is has my second customized object
let userController2 = require('./controller/feedController2');
//second object website called localhost:/api/users2
app.route('/api/users2')
    .get((req, res) => {
        userController2.getPlayers(req, res);
    })
    .post((req, res)=> {
        userController2.savePlayers(req, res);
    })
//the website with userId
app.route('/api/users2/:userId')
    .get((req, res) => {
        userController2.getPlayer(req, res);
    })
    .delete((req, res) => {
        userController2.deletePlayer(req, res);
    })
    .patch((req, res) => {
        userController2.updatePlayer(req, res);
    })
    
    
    
    
    
    
    
    
    
    
    
    app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'})
})

app.get('/feed', function(req, res) {
    res.sendFile('feed.html', {root: './client/views'})
})

app.listen(1337, () => console.log('Listening on port 1337.'))

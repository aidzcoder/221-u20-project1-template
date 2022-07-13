const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('client/public'));
app.use(bodyParser.json({type: 'application/json'}));

let userController = require('./controller/feedController');

app.route('/api/users')
    .get((req,res) => {
        userController.getfeedItems(req, res);
    })
    .post((req, res)=> {
        userController.savefeedItems(req, res);
    })

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

let userController2 = require('./controller/feedController2');

app.route('/api/users2')
    .get((req, res) => {
        userController2.getPlayers(req, res);
    })
    .post((req, res)=> {
        userController2.savePlayers(req, res);
    })

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

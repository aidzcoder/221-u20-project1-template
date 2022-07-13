const player = require("../model/player");

console.log("controller2 running!")

let player1 = player.createPlayer("John654","1","vandal");
let player2 = player.createPlayer("Supercat657","43","ak-47");
let player3 = player.createPlayer("MikeOxlong","107","sheriff");

let players = [];
players.push(player1);
players.push(player2);
players.push(player3);


console.log(players);

exports.getPlayers = (req , res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(players);
}

exports.savePlayers = (req, res) => {
    res.setHeader('content-Type','application/json');
    players.push(player.createPlayer(req.body.playerName, req.body.playerlvl, req.body.playerGun,));
    res.send(players);
}

exports.getPlayer = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(players[req.params.userId]);
}

exports.deletePlayer = (req, res) => {
    res.setHeader('content-Type','application/json');
    players.splice(req.params.userId, 1);
    res.send(players);
}
exports.updatePlayer = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
	var updatedplayer = players[req.params.userId];

	console.log(req.body.playerName);
	
    if(req.body.playerName)
        updatedplayer.playerName = req.body.playerName;
	if(req.body.playerlvl)
        updatedplayer.playerlvl = req.body.playerlvl;
	if(req.body.playerGun)
        updatedplayer.playerGun = req.body.playerGun;
    
    players[req.params.userId] = updatedplayer;
    res.send(players[req.params.userId]);
}
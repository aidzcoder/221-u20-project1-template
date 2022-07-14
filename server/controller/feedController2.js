const player = require("../model/player");

console.log("controller2 running!")

//creating players
let player1 = player.createPlayer("John654","1","vandal");
let player2 = player.createPlayer("Supercat657","43","ak-47");
let player3 = player.createPlayer("MikeOxlong","107","sheriff");

//pushes all the players into another array called players
let players = [];
players.push(player1);
players.push(player2);
players.push(player3);


console.log(players);
//gets all the players in players
exports.getPlayers = (req , res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(players);
}
//pushes input of a player into the array players
exports.savePlayers = (req, res) => {
    res.setHeader('content-Type','application/json');
    players.push(player.createPlayer(req.body.playerName, req.body.playerlvl, req.body.playerGun,));
    res.send(players);
}
//gets a specified player using id
exports.getPlayer = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(players[req.params.userId]);
}
//deleting a specified player using id
exports.deletePlayer = (req, res) => {
    res.setHeader('content-Type','application/json');
    players.splice(req.params.userId, 1);
    res.send(players);
}
//can change a specified part of a player and updating it as well as printing it out
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
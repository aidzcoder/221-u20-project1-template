//player constructor
function player(playerName,playerlvl, playerGun){
    this.playerName = playerName;
    this.playerlvl = playerlvl;
    this.playerGun = playerGun;
}

console.log("model player running");

//allows me to create players inside the second controller
exports.createPlayer = (playerName, playerlvl, playerGun) => {
    return new player(playerName, playerlvl, playerGun);
}

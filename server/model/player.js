function player(playerName,playerlvl, playerGun){
    this.playerName = playerName;
    this.playerlvl = playerlvl;
    this.playerGun = playerGun;
}

console.log("model player running");

exports.createPlayer = (playerName, playerlvl, playerGun) => {
    return new player(playerName, playerlvl, playerGun);
}

var dataBase;
var form, game, player
var gameState = 0
var playerCount

function setup(){
    dataBase = firebase.database();
    createCanvas(400,400);
    game = new Game()
    game.getState()
    game.start()
}

function draw(){
    background("white");
}
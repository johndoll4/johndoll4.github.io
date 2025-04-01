var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY - 20, hitsize : 25, damage : 10, image: "img/tumbleweed.png", rotate : -10, offsetX : -25, offsetY : -25, scale : 0.15},
          { type: "sawblade", x: 900, y: groundY - 101, hitsize : 25, damage : 10, image: "img/battlebus.png", rotate : 0, offsetX : -75, offsetY : -60, scale : 0.5},
          { type: "sawblade", x: 1234, y: groundY - 10, hitsize : 25, damage : 10, image: "img/tumbleweed.png", rotate : -10, offsetX : -25, offsetY : -25, scale : 0.15},
          
          { type: "enemy", x: 500, y: groundY - 50, damage : 50},
          { type: "enemy", x: 900, y: groundY - 50, damage : 15},
          { type: "enemy", x: 1200, y: groundY - 50, damage : 5},

          { type: "reward", x: 700, y: groundY - 103, health : 50},
          { type: "reward", x: 1100, y: groundY - 103, health : 15},
          { type: "reward", x: 1500, y: groundY - 103, health : 5},

          { type: "level", x: 2000, y: groundY - 50, health : 100}
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY },
          { type: "sawblade", x: 600, y: groundY },
          { type: "sawblade", x: 900, y: groundY },
        ],
      },
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}

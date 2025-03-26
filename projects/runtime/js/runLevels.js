var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE

    function createObstacles (x, y, hitSize, damage) {
    var hitZoneSize = hitSize; // define the size of the hitzoone and assign to a variable
    var damageFromObstacle = damage; // defines the amount of damage an obstacle causes and assigns to variable
    var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); // creates the obstacle hitzone using size and damage as parameters
    obstacleHitZone.x = x; // sets the x coordinate of the obstacle
    obstacleHitZone.y = y; // sets the y coordinate of the obstacle
    game.addGameItem(obstacleHitZone); // adds the obstacle hitzone to the game
    var obstacleImage = draw.bitmap("img/sawblade.png"); // draw the image bitmap and store it in a variable
    obstacleHitZone.addChild(obstacleImage); // attaches the miage to the obstacle hitzone
    obstacleImage.x = -25; // positions the image on the hitzone's x value by moving it left 25 pixels
    obstacleImage.y = -25; // positions the image on the hitzone's y value by moving it up 25 pixels
    }
    
    createObstacles(400, groundY - 20, 25, 10);
    createObstacles(900, groundY - 101, 25, 10);
    createObstacles(1234, groundY - 10, 25, 10);

  function createEnemy(x, y, damage, type) {
    var enemy = game.createGameItem("enemy", 25); // creates enemy game item and adds it to game and stores it in the variable enemy
    var redSquare = draw.rect(50, 50, "red"); // creates a red square and stores it in the variable red square
    redSquare.x = -25; // offsets the image from the hitzone by -25 pixels
    redSquare.y = -25; // offsets the image from the hitzone by -25 pixels
    enemy.addChild(redSquare); //add the red square as a child to our enemy variable
    enemy.x = x; // x pos of enemy
    enemy.y = y; // y pos of enemy
    game.addGameItem(enemy); // adds enemy to game
    enemy.velocityX -= 3; // makes the enemy move
    enemy.rotationalVelocity = 1; // rotates enemy
    
    enemy.onPlayerCollision = function () {
      game.changeIntegrity(-damage) // subtract 10 health from hallebots HUD
    };
    
    enemy.onProjectileCollision = function () {
      game.increaseScore(100); // increases your score when hallebot shoots the enemy
      enemy.fadeOut(); // makes enemy fade out when shot by hallebot
      //enemy.shrink();
      //enemy.flyTo(x,y)
    };
  }

    createEnemy(500, groundY-50, 50); // calls an enemy
    createEnemy(900, groundY-50, 15); // calls an enemy
    createEnemy(1200, groundY-50, 5); // calls an enemy


    function createReward(x, y, health, type) {
      var reward = game.createGameItem("reward", 25); // creates reward game item and adds it to game and stores it in the variable reward
      var redSquare = draw.rect(50, 50, "purple"); // creates a red square and stores it in the variable red square
      redSquare.x = -25; // offsets the image from the hitzone by -25 pixels
      redSquare.y = -25; // offsets the image from the hitzone by -25 pixels
      reward.addChild(redSquare); //add the red square as a child to our reward variable
      reward.x = x; // x pos of reward
      reward.y = y; // y pos of reward
      game.addGameItem(reward); // adds reward to game
      reward.velocityX -= 3; // makes the reward move
      reward.rotationalVelocity = 1; // rotates reward
      
      reward.onPlayerCollision = function () {
        game.changeIntegrity(health) // subtract 10 health from hallebots HUD
        reward.shrink();
      };
    }

    createReward(700, groundY-50, 50); // calls an enemy
    createReward(1100, groundY-50, 15); // calls an enemy
    createReward(1500, groundY-50, 5); // calls an enem

    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}

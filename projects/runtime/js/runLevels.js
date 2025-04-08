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

    function createObstacles (x, y, hitSize, damage, image, rotate, offsetX, offsetY, scale) {
    var hitZoneSize = hitSize; // define the size of the hitzoone and assign to a variable
    var damageFromObstacle = damage; // defines the amount of damage an obstacle causes and assigns to variable
    var obstacleHitZone = game.createObstacle(hitZoneSize, damageFromObstacle); // creates the obstacle hitzone using size and damage as parameters
    obstacleHitZone.x = x; // sets the x coordinate of the obstacle
    obstacleHitZone.y = y; // sets the y coordinate of the obstacle
    game.addGameItem(obstacleHitZone); // adds the obstacle hitzone to the game
    var obstacleImage = draw.bitmap(image); // draw the image bitmap and store it in a variable
    obstacleHitZone.addChild(obstacleImage); // attaches the miage to the obstacle hitzone
    obstacleImage.x = offsetX; // positions the image on the hitzone's x value by moving it left 25 pixels
    obstacleImage.y = offsetY; // positions the image on the hitzone's y value by moving it up 25 pixels
    obstacleHitZone.rotationalVelocity = rotate; // rotates the sawblades
    obstacleImage.scaleX = scale; // scales obstacle X 
    obstacleImage.scaleY = scale; // scales obstacle Y
    }
    /*
    createObstacles(400, groundY - 20, 25, 10);
    createObstacles(900, groundY - 101, 25, 10);
    createObstacles(1234, groundY - 10, 25, 10);
    */
  function createEnemy(x, y, damage, image, scale, offsetX, offsetY) {
    var enemy = game.createGameItem("enemy", 25); // creates enemy game item and adds it to game and stores it in the variable enemy
    var redSquare = draw.bitmap(image); // creates a red square and stores it in the variable red square
    redSquare.x = -offsetX; // offsets the image from the hitzone by -25 pixels
    redSquare.y = -offsetY; // offsets the image from the hitzone by -25 pixels
    enemy.addChild(redSquare); //add the red square as a child to our enemy variable
    enemy.x = x; // x pos of enemy
    enemy.y = y; // y pos of enemy
    game.addGameItem(enemy); // adds enemy to game
    enemy.velocityX -= 3; // makes the enemy move
    // enemy.rotationalVelocity = 1; // rotates enemy
    redSquare.scaleX = scale; // scales enemy X
    redSquare.scaleY = scale; // sclaes enemy Y
    
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
    /*
    createEnemy(500, groundY-50, 50); // calls an enemy
    createEnemy(900, groundY-50, 15); // calls an enemy
    createEnemy(1200, groundY-50, 5); // calls an enemy
    */

    function createReward(x, y, health, image, scale, offsetX, offsetY) {
      var reward = game.createGameItem("reward", 25); // creates reward game item and adds it to game and stores it in the variable reward
      var purpleSquare = draw.bitmap(image); // creates a red square and stores it in the variable red square
      purpleSquare.x = offsetX; // offsets the image from the hitzone by -25 pixels
      purpleSquare.y = offsetY; // offsets the image from the hitzone by -25 pixels
      reward.addChild(purpleSquare); //add the red square as a child to our reward variable
      reward.x = x; // x pos of reward
      reward.y = y; // y pos of reward
      game.addGameItem(reward); // adds reward to game  
      reward.velocityX -= 3; // makes the reward move
      // reward.rotationalVelocity = 1; // rotates reward
      purpleSquare.scaleX = scale; // scales enemy X
      purpleSquare.scaleY = scale; // sclaes enemy Y
      
      reward.onPlayerCollision = function () {
        game.changeIntegrity(health) // adds a certain amount of health to hallebots HUD
        reward.fadeOut();
      };
    }
    /*
    createReward(700, groundY-103, 50); // calls a reward
    createReward(1100, groundY-103, 15); // calls a reward
    createReward(1500, groundY-103, 5); // calls a reward
    */

    function createLevel(x, y, health, image) {
      var level = game.createGameItem("level", 25); // creates level game item and adds it to game and stores it in the variable level
      var yellowSquare = draw.bitmap(image); // creates a red square and stores it in the variable red square
      yellowSquare.x = -30; // offsets the image from the hitzone by -25 pixels
      yellowSquare.y = -30; // offsets the image from the hitzone by -25 pixels
      level.addChild(yellowSquare); //add the red square as a child to our level variable
      level.x = x; // x pos of level
      level.y = y; // y pos of level
      game.addGameItem(level); // adds level to game  
      level.velocityX -= 3; // makes the level move
      // level.rotationalVelocity = 1; // rotates level
      yellowSquare.scaleX = 0.25; // scales level X
      yellowSquare.scaleY = 0.25; // sclaes level Y
      
      level.onPlayerCollision = function () {
        game.changeIntegrity(health) // adds a certain amount of health to hallebots HUD
        level.shrink();
        startLevel();
      };
    }
    /*
    createLevel(1900, groundY-50, 100); // calls a new level
    */


    



    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel]; // fetches the currentLevel from the levelData array and stores it in var level
      var levelObjects = level.gameItems // retrieves the arrawy of gameItems and stores it in var levelObjects

      for (var i = 0; levelObjects.length; i++) {
        var element = levelObjects[i];

        if (element.type === "sawblade") { // checks the type key:value of the gameItems object and manifests its value
          createObstacles(element.x, element.y, element.hitsize, element.damage, element.image, element.rotate, element.offsetX, element.offsetY, element.scale); // if the condition is true it will call the relevant function
        }

        if (element.type === "enemy") { // checks the type key:value of the gameItems object and manifests its value
          createEnemy(element.x, element.y, element.damage, element.image, element.scale, element.offsetX, element.offsetY); // if the condition is true it will call the relevant function
        }
        
        if (element.type === "reward") { // checks the type key:value of the gameItems object and manifests its value
          createReward(element.x, element.y, element.health, element.image, element.scale, element.offsetX, element.offsetY); // if the condition is true it will call the relevant function
        }
        
        if (element.type === "level") { // checks the type key:value of the gameItems object and manifests its value
          createLevel(element.x, element.y, element.health, element.image); // if the condition is true it will call the relevant function
        }
      }

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

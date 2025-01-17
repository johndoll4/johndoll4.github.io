$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); //top
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200); //right
    createPlatform(-50, -50, 50, canvas.height + 500); //bottom
    createPlatform(canvas.width, -50, 50, canvas.height + 100);

    /**
     * Uncomment the drawGrid() function call below to add a "grid" to your platformer game's screen
     * The grid will place both horizontal and vertical platforms incremented 100 pixels apart
     * This can help you determine specific x any y values throughout the game
     * Comment the function call out to remove the grid
     */

    // drawGrid();

    /////////////////////////////////////////////////
    //////////ONLY CHANGE BELOW THIS POINT///////////
    /////////////////////////////////////////////////
    
    // TODO 1
    // Create platforms
    // You must decide the x position, y position, width, and height of the platforms
    // example usage: createPlatform(x,y,width,height)
    
    createPlatform(400,600,100,10);
    createPlatform(300,500,100,10);
    createPlatform(700,550,100,10);
    createPlatform(1000,600,100,10);
    createPlatform(50,600,100,10);
    createPlatform(1275,400,100,10);
    createPlatform(600,380,100,10);
    createPlatform(100,400,100,10);
    createPlatform(900,250,100,10);
    


    
    // TODO 2
    // Create collectables
    // You must decide on the collectable type, the x position, the y position, the gravity, and the bounce strength
    // Your collectable choices are 'database' 'diamond' 'grace' 'kennedi' 'max' and 'steve'; more can be added if you wish
    // example usage: createCollectable(type, x, y, gravity, bounce)
    createCollectable("troll1",1310,360,0,0);
    createCollectable("troll2",135,360,0,0);
    createCollectable("troll3",1035,560,0,0);
    createCollectable("troll3",600,380,0,0);
    createCollectable("troll2",775,530,0,0);
    

    
    // TODO 3
    // Create cannons
    // You must decide the wall you want the cannon on, the position on the wall, and the time between shots in milliseconds
    // Your wall choices are: 'top' 'left' 'right' and 'bottom'
    // example usage: createCannon(side, position, delay, width, height)
    createCannon("right", 700,0.001);
    createCannon("right", 710,0.001);
    createCannon("right", 720,0.001);
    createCannon("right", 730,0.001);
    createCannon("right", 740,0.001);
    createCannon("right", 750,0.001);
    createCannon("right", 760,0.001);
    createCannon("right", 770,0.001);
    createCannon("right", 780,0.001);
    createCannon("right", 790,0.001);
    createCannon("right", 800,0.001);
    createCannon("left", 582,0.001);
    createCannon("left", 592,0.001);
    createCannon("left", 602,0.001);
    createCannon("left", 612,0.001);
    createCannon("left", 622,0.001);
    createCannon("left", 632,0.001);
    createCannon("left", 642,0.001);
    createCannon("left", 652,0.001);
    createCannon("left", 662,0.001);
    createCannon("left", 672,0.001);
    createCannon("left", 682,0.001);
    


    
    /////////////////////////////////////////////////
    //////////ONLY CHANGE ABOVE THIS POINT///////////
    /////////////////////////////////////////////////
  }

  registerSetup(setup);
});

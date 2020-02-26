"use strict";

var bebop = require("../.");
var keypress = require('../../keypress')
keypress(process.stdin)

var drone = bebop.createClient();

if (process.stdin.setRawMode)
  process.stdin.setRawMode(true)
else
  require('tty').setRawMode(true)

//Menu d'affichage
console.log("===================================================");
console.log("   START : Vole");
console.log("   SELECT : Atteri");
console.log("   PS : Vol stationnaire");
console.log("   R2 : Monte");
console.log("   L2 : Descend");
console.log("   R1 : Roulis droit");
console.log("   L1 : Roulis gauche");
console.log("                                                  ");
console.log("                          |          Avance       ");
console.log("            |             |            |          ");
console.log("  Gauche -- o -- Droite   |         -- o --       ");
console.log("            |             |            |          ");
console.log("                          |          Recule       ");
console.log("                          |                       ");
console.log("===================================================");

//Etape de connexion
drone.connect(function() {

  process.stdin.on('keypress', function (c, key) {
  //console.log(c)
    if (key && key.ctrl && key.name == 'c') {
      process.stdin.pause()
      console.log("Fin programme");
      process.exit(1)
    }
    /*
    if (key && key.name == 'a') {
      drone.takeOff();
      //console.log("Vole");
    }

    if (key && key.name == 'e') {
      drone.land();
      //console.log("Atteri");
    }

    if (key && key.name == 'x') {
      drone.stop();
      //console.log("Stop");
    }

    if (key && key.name == 'z') {
      drone.forward(10);
      //console.log("Avance");
    }

    if (key && key.name == 's') {
      drone.backward(10);
      //console.log("Recule");
    }

    if (key && key.name == 'd') {
      drone.right(10);
      //console.log("Droite");
    }

    if (key && key.name == 'q') {
      drone.left(10);
      //console.log("Gauche");
    }

    if (key && key.name == 'up') {
      drone.up(10);
      //console.log("Monte");
    }

    if (key && key.name == 'down') {
      drone.down(10);
      //console.log("Descend");
    }

    if (key && key.name == 'right') {
      drone.clockwise(50);
      //console.log("Roulis droit");
    }

    if (key && key.name == 'left') {
      drone.counterClockwise(50);
      //console.log("Roulis gauche");
    }
  */
  switch(key && key.name){
    case 'a'  : drone.takeoff();
              break;
    case 'e'  : drone.land();
              break;
    case 'x'  : drone.stop();
              break;
    case 'z'  : drone.forward(10);
              break;
    case 's'  : drone.backward(10);
              break;
    case 'd'  : drone.right(10);
              break;
    case 'q'  : drone.left(10);
              break;
    case 'up' : drone.up(10);
              break;
    case 'down': drone.down(10);
              break;
    case 'right' : drone.clockwise(50);
              break;
    case 'left': drone.counterClockwise(50);
              break;
    default : drone.stop();
  }
  })  //end process.stdin.on
}); //end drone.connect

process.stdin.resume()
  
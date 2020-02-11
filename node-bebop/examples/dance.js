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
console.log("=========================");
console.log("   a : Vole");
console.log("   e : Atteri");
console.log("   x : Vol stationnaire");
console.log("   z : Avance");
console.log("   s : Recule");
console.log("   q : Gauche");
console.log("   d : Droite");
console.log("   u : Monte");
console.log("   j : Descend");
console.log("   b : Tourne");
console.log("=========================");

//Etape de connexion
drone.connect(function() {

  process.stdin.on('keypress', function (c, key) {
  //console.log(c)
    if (key && key.ctrl && key.name == 'c') {
      process.stdin.pause()
      console.log("Fin programme");
      process.exit(1)
    }

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

    if (key && key.name == 'u') {
      drone.up(10);
      //console.log("Monte");
    }

    if (key && key.name == 'j') {
      drone.down(10);
      //console.log("Descend");
    }

    if (key && key.name == 'b') {
      drone.clockwise(50);
      //console.log("Tourne");
    }
  })  //end process.stdin.on
}); //end drone.connect

process.stdin.resume()
  
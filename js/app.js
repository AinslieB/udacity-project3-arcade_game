// Per MDN, Strict mode "inplicitly opts out of 'sloppy mode',
//thereby requiring the developer to write more correct code
"use strict";

// Enemies our player must avoid
// Variables applied to each of our instances go here,
// we've provided one for you to get started
// The image/sprite for our enemies, this uses
// a helper we've provided to easily load images

class Enemy {
  constructor(x, y, speed) {
    this.x = x;
    this.y = y + 60;
    this.sprite = "images/enemy-bug.png";
    this.speed = speed;
    this.horiz = 101;
    this.canvasWidth = this.horiz * 5;
    this.resetEnemy = -this.horiz;
  }
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
// which will ensure the game runs at the same speed for
// all computers.

Enemy.prototype.update = function(dt) {

//If enemy has not reached the end of the canvas,
//move enemy forward and increment x by speed times dt
  if(this.x < this.canvasWidth) {
    this.x += this.speed * dt;
    }
    else {
      this.x = this.resetEnemy;
    }
  };

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

class Protagonist {
  constructor(x, y, sprite) {
    this.horiz = 101;
    this.vert = 83;
    this.playerStartX = this.horiz * 2;
    this.playerStartY = (this.vert * 5) - 10;
    this.x = this.playerStartX;
    this.y = this.playerStartY;
    this.gameWon = false;
    this.sprite = "images/char-cat-girl.png";
  } // end constructor

  update() {
// Need functions to check for collisions and game won
//Check for collisions first
    for(let enemy of allEnemies) {
      if ((this.y + 10) === (enemy.y + 23) &&
      (enemy.x + enemy.horiz/2 > this.x &&
      enemy.x < this.x + this.horiz/2) ) {
        this.resetPlayer();
      }
//Then check for game won condition
      if (this.y === -10) {
        this.gameWon = true;
      }
    }
  } // end update

// Draw protagonist sprite at 0,0 x and y coordinates
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  } // end render

// Update protagonist's x and y property according to input
// Prevents Protagonist from moving off the canvas
// Canvas boundaries:
// 0,0 . . . . 404,0
// 0,415 . . . 404,415
//     @param  {string} input - Direction to travel

  handleInput(allowedKeys) {
    switch(allowedKeys) {
      case "left":
        if (this.x > 0) {
          this.x -= this.horiz;
        }
        break;
      case "right":
        if (this.x < 404) {
         this.x += this.horiz;
        }
        break;
      case "up":
        if (this.y > 0) {
          this.y -= this.vert;
        }
        break;
      case "down":
        if (this.y < 333) {
          this.y += this.vert;
        }
        break;
    } // end switch
  } // end handleInput

   resetPlayer() {
     this.x = this.playerStartX;
     this.y = this.playerStartY;
   } // end resetPlayer

}; //end class Protagonist


// **********************************************************************

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
//TODO Continue to experiment with different speeds or create
//a speed randomizer
const enemy1 = new Enemy(-101, 0, 275);
const enemy2 = new Enemy(-101, 83, 175);
const enemy3 = new Enemy(-101, 166, 200);
const enemy4 = new Enemy((-101*2.5), 0, 600);
const enemy5 = new Enemy((-101*2.5), 83, 225);
const enemy6 = new Enemy((-101*2.5), 166, 300);


const allEnemies = [];
allEnemies.push(enemy1, enemy2, enemy3, enemy4, enemy5, enemy6);

const player = new Protagonist();

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };
    player.handleInput(allowedKeys[e.keyCode]);
});

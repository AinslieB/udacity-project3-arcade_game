# Classic Arcade Game Based on Frogger: Udacity Project 3
According to Wikipedia, Frogger is an arcade game created by Konami in 1981. The objective of the game is to guide your frogs to safety and not become roadkill.

This project is based on the frogger concept, but the "frog" is a single human player and the cars are giant beetles. Although much more simple than the original game, this project is effective in teaching the basics of object-oriented coding.

## First, Copy the Files from GitHub

### Download the files from GitHub to your computer
1. Click the green _Clone or download_ button on GitHub.
2. Select *Download ZIP*.
3. Open your Downloads folder and right-click the ZIP file.
4. Select either the _Unzip_ or _Uncompress_ option. Then select the folder to which you want to save the files.

### Fork the repository to your own GitHub account
1. Create a GitHub account if you don't already have one.
2. Click the *Fork* link near the top right of my GitHub repository.
3. The files will be forked to your GitHub repository.

## How to Play
The animation begins when the game loads. The canvas, player, and enemy are rendered. Six enemy bugs move at various speeds. The arrow keys control the movement of the player up, down. left, and right. The game is won when the player reaches the river. Collisions with the enemy causes the player to be returned to the bottom center of the canvas.

<img src="images/frogger.jpg">

When the player reaches the water, a modal is displayed and the player has the option to play again.

## Constraints and Known Bugs
This game uses the HTML5 dialog element to open a modal when the user has won the game. For best results, please use one of the following browsers, as other browsers may not support the dialog element yet.
* Chrome version 37 or later
* Opera version 24 or later

## Languages and Resources Used
* HTML, CSS, and JavaScript* 
* Starter code from Udacity

# Safari Memory Game

##Link to Play Hosted Game
https://joshellman.github.io/memory-game/

##Synopsis

The following game is called "Safari Memory Game."  The game is meant for two players to compete against each other to determine who has the best visual memory. There are 10 different pairs, which comes out to a total of 20 cards. The game starts with all of the cards facing down. When you consecutively click on two identical cards, those cards will remain face up. However, if the two cards you click are not identical, they will remain face down and the player will have to look for a pair of matching cards. The first to find all 10 matching pairs in the least amount of time is the winner.


##Development process
Technologies utilized: HTML / CSS / Javascript + jQuery

The board was created using div IDs in HTML and placed using jQuery. Images were added to the face of the cards using an array in JavaScript. When the "start game" button is clicked, a for loop is ran causing the array to display in a random order. Using variables and functions in JavaScript and jQuery, matching pairs animate to remain face up while incorrect matches animate back to the card. A function is ran to alert the player when all 10 matching pairs are located, alongside with a timer then increases by 1 every 1000ms.

##Motivation

Our project was to build a game using HTML, CSS, JavaScript/jQuery and felt a memory game would be the perfect way to display this. I love wild animals and figured a wild animal safari game would be the perfect route for me to take.

##Installation

https://joshellman.github.io/memory-game/ to play the game directly from github page, or download a .zip of this repository and open the index.html inside of your browser.

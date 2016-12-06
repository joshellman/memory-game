# Safari Memory Game
![](https://github.com/joshellman/memory-game/blob/master/safari_screenshot.png)

##Link to Play Hosted Game
https://joshellman.github.io/memory-game/

##Synopsis

The following game is called "Safari Memory Game."  The game is meant for two players to compete against each other to determine who has the best visual memory. There are 10 different pairs, which comes out to a total of 20 cards. The game starts with all of the cards facing down. When you consecutively click on two identical cards, those cards will remain face up. However, if the two cards you click are not identical, they will remain face down and the player will have to look for a pair of matching cards. The first to find all 10 matching pairs in the least amount of time is the winner.


##Development process
Technologies utilized: HTML / CSS / Javascript + jQuery

The board was created using div IDs in HTML and placed using jQuery. Images were added to the face of the cards using an array in JavaScript. When the "start game" button is clicked, a for loop is ran causing the array to display in a random order. Using variables and functions in JavaScript and jQuery, matching pairs animate to remain face up while incorrect matches animate back to the card. A function is ran to alert the player when all 10 matching pairs are located, alongside with a timer then increases by 1 every 1000ms.

##User Stories
* As a user, when the board is first loaded to the screen all the card are on the board face down, with the timer set to 0.

* As a user, I can click on "Player Start," which causes all of the cards to flip to their face for a total of 5 seconds. The face displays 10 pairs of animals.

* As a user, I need to try and remember the order that the pairs were randomly generated on to the board.

* As a user, if I get a correct match the pair of cards will remain face up. However, if I choose an incorrect match, the cards will remain facedown

* As a user, when all 10 pairs are selected, the game will read "All matches found"

* As a user, the time will display in Player 1 time.

* As a user, another user clicks "Player Start" to follow the exact same process.

* As a user, the user that was able to find the 10 pairs in the least amount of time will show up as the winner on the top of the screen.

##Motivation

Our project was to build a game using HTML, CSS, JavaScript/jQuery and felt a memory game would be the perfect way to display this. I love wild animals and figured a wild animal safari game would be the perfect route for me to take.

##Installation

https://joshellman.github.io/memory-game/ to play the game directly from github page, or download a .zip of this repository and open the index.html inside of your browser.

##Future Development

* Clean up styling and make everything look neater and more presentable.
* Create an instruction window that pops up and goes away when ready to begin playing.
* Create a way for player to type in their name.
* Maybe create a different way of scoring/timing the game.

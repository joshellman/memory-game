// create variables for the game
var $container = $('#container')
var $timer = $('#timer')
var pick1 = null
var pick2 = null
var $faces = null

// all of our cards:
var deck = ['<img src="css/lion.png" />', '<img src="css/lion.png" />', '<img src="css/gorilla.png" />', '<img src="css/gorilla.png" />', '<img src="css/elephant.png" />', '<img src="css/elephant.png" />', '<img src="css/tiger.png" />', '<img src="css/tiger.png" />', '<img src="css/hippo.png" />', '<img src="css/hippo.png" />' , '<img src="css/wolf.png" />', '<img src="css/wolf.png" />', '<img src="css/zebra.png" />', '<img src="css/zebra.png" />', '<img src="css/cheetah.png" />', '<img src="css/cheetah.png" />', '<img src="css/rhino.png" />', '<img src="css/rhino.png" />', '<img src="css/jaguar.png" />'
,'<img src="css/jaguar.png" />']

// create button and text inside the button
var startButton = document.createElement("button");

var txt = document.createTextNode("Player Start");
startButton.appendChild(txt);                                // Append the text to <button>
document.body.appendChild(startButton);

// switch player to player 2 if not current player
switchPlayer = function() {
  if (game.currentPlayer == game.player2) {
    game.currentPlayer = game.player1
  } else {
    initializeGame()
    game.currentPlayer = game.player2
  }
}
// creates score to log results of each player
var game = {
  player1: {
    name: "p1",
    time: 0,
    matches: 0
  },
  player2: {
    name: "p2",
    time: 0,
    matches: 0
  }
}

game.currentPlayer = game.player1

//Shuffle the deck and have cards randomly placed.
function shuffle(deck) {
  var m = deck.length;
  var t;
  var i;
  // While there remain elements to shuffle…
  while (m) {
    // Pick a remaining element…
    i = Math.floor(Math.random() * m--);
    // And swap it with the current element.
    t = deck[m];
    deck[m] = deck[i];
    deck[i] = t;
  }
  return deck;
}

function initializeGame() {
  $('#container').empty()
  shuffle(deck)
  // deal the cards:
  for(var i = 0; i < deck.length; i += 1) {
    $container.append('<div class="card "><div class="face">' + deck[i] + '</div></div>')
  }
  //collection of '.face' divs that we already have
  $faces = $(".face")


  // when you click a '.face':
  $faces.on('click', function(){
    if(pick1 == null) {
      pick1 = $(this)
    } else {
      pick2 = $(this)

      // if they're equal, do stuff, otherwise, do other stuff.
      if (pick1.html() == pick2.html()){
        console.log("true")
        game.currentPlayer.matches += 1

        pick1.addClass('matched').off('click')
        pick2.addClass('matched').off('click')

        pick1 = null
        pick2 = null

        checkMatches()

      } else {
        console.log("false")

        // but either way: pick1 and pick2 are set back to null at the end of this else statement

        setTimeout(function (){
          pick1.animate({opacity: 0})
          pick2.animate({opacity: 0})
          pick1 = null
          pick2 = null
        }, 500)

      }

      }

    // animate its transparency to '1'
    $(this).animate({opacity: 1})

    // print the text thats inside to the console
    console.log($(this).text())
  })
}

initializeGame()
// click start button to flip cards for 5 seconds and begin the timer.
$(startButton).on('click', function() {
  showCards = setTimeout(function() {
    $faces.animate({opacity: 1});
  },1000);
  setTimeout(function() {
    $faces.animate({opacity: 0});
  },5000)

  setTimeout(function() {
    Timer = setInterval(function() {
      // if($timer.html() > 0) {
        game.currentPlayer.time += 1
        $timer.text(game.currentPlayer.time)
      // }
    },1000);
  }, 5000);
});
// log & alert when player gets all matches correctly. Then switch to next player.
function checkMatches() {
  if($('.matched').length == 20) {
    console.log("")
    clearInterval(Timer)
    alert("You found all matches!")
    $('#Player1').text("Player 1 Time: " +game.player1.time)

    if(game.currentPlayer == game.player1) {
      switchPlayer();
    } else {
      console.log("Game Over!")
        $('#Player2').text("Player 2 Time: " +game.player2.time)
// compare the scores
      if(game.player1.time < game.player2.time) {
        // player 1 wins
        $('h1').text("Player 1 wins!")

      } else {
        // player 2 wins
        $('h1').text("Player 2 wins!")
      }
    }
    $('#timer').text(0)
  }

}


// var timer = setInterval(function, 1000);


//      var timer = function(timer, 1000){
//             timer = setInterval(timer, 1000);
//         };
//     timer();
// }



// for (var i = 0; i < cards.length; i++) {
//     tiles[i].drawFaceDown();
// }
//
// mouseClicked = function() {
// };

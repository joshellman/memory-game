// Need to create 2 player start buttons
// Need to create logic to assign a winner
// Cards are no longer flipping over when clicked


var $container = $('#container')
var $timer = $('#timer')
var pick1 = null
var pick2 = null

var player1Time = 0
var player2Time = 0

// all of our cards:
var deck = ['<img src="css/lion.png" />', '<img src="css/lion.png" />', '<img src="css/gorilla.png" />', '<img src="css/gorilla.png" />', '<img src="css/elephant.png" />', '<img src="css/elephant.png" />', '<img src="css/tiger.png" />', '<img src="css/tiger.png" />', '<img src="css/hippo.png" />', '<img src="css/hippo.png" />' , '<img src="css/wolf.png" />', '<img src="css/wolf.png" />', '<img src="css/zebra.png" />', '<img src="css/zebra.png" />', '<img src="css/cheetah.png" />', '<img src="css/cheetah.png" />', '<img src="css/rhino.png" />', '<img src="css/rhino.png" />', '<img src="css/jaguar.png" />'
,'<img src="css/jaguar.png" />']

var startButton = document.createElement("button");

var txt = document.createTextNode("Player 1 Start");
startButton.appendChild(txt);                                // Append the text to <button>
document.body.appendChild(startButton);


switchPlayer = function() {
  if (game.currentPlayer == game.player2) {
    game.currentPlayer = game.player1
  } else {
    game.currentPlayer = game.player2
  }
}
var game = {
  player1: {
    name: "p1",
    score: 0,
    matches: 0
  },
  player2: {
    name: "p2",
    score: 0,
    matches: 0
  }
}

game.currentPlayer = game.player1

// var txt = document.createTextNode("Player 2 Start");
// startButton.appendChild(txt);                                // Append the text to <button>
// document.body.appendChild(startButton);



// we'll eventually shuffle here...
//////////

//Shuffle the deck
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


shuffle(deck)
// deal the cards:
for(var i = 0; i < deck.length; i += 1) {
  $container.append('<div class="card "><div class="face">' + deck[i] + '</div></div>')
}
//collection of '.face' divs that we already
var $faces = $(".face")


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

      pick1.addClass('matched')
      pick2.addClass('matched')

      pick1 = null
      pick2 = null

      checkMatches()
      // check how many have been matched
      // if($('.matched').length == 20)
      // $('.matched')
      // // [div.face.matched, div.face.matched]
      // $('.matched').length


} else {
      console.log("false")

      setTimeout(function (){
        pick1.animate({opacity: 0})
        pick2.animate({opacity: 0})
        pick1 = null
        pick2 = null
      }, 500)

    }

    // but either way: set pick1 and pick2 back to null at the end of this else

  }

  // animate its transparency to '1'
  $(this).animate({opacity: 1})

  // print the text thats inside to the console
  console.log($(this).text())
})

$(startButton).on('click', function() {
  showCards = setTimeout(function() {
    $faces.animate({opacity: 1});
  },1000);
  setTimeout(function() {
    $faces.animate({opacity: 0});
  },7000)

  setTimeout(function() {
    Timer = setInterval(function() {
      // if($timer.html() > 0) {
        player1Time += 1
        $timer.text(player1Time)
      // }
    },1000);
  }, 7000);
});

// function startrtTimeFunction () {
//   setInterval
// }
// setTimeout(function () {
//
// }, 1000);


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


function checkMatches() {
  if (game.currentPlayer.matches == 2) {
    game.currentPlayer.score = $('#timer').html();
    clearInterval(Timer)
    alert("found all matches")
    switchPlayer();
    $('#timer').text(0)
  }
}
$('h1').text(game.currentPlayer.score)

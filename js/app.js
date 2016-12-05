var $container = $('#container')
var $timer = $('#timer')
var pick1 = null
var pick2 = null

// all of our cards:
var deck = ['<img src="css/lion.png" />', 'Lion Picture', 'Gorilla Picture', 'Gorilla Picture', 'Elephant Picture', 'Elephant Picture', 'Tiger Picture', 'Tiger Picture', 'Hippo Picture', 'Hippo Picture', 'Eagle Picture', 'Eagle Picture', 'Zebra Picture', 'Zebra Picture', 'Cheetah Picture', 'Cheetah Picture', 'Rhino Picture', 'Rhino Picture', 'Jaguar Picture', 'Jaguar Picture']

var startButton = document.createElement("button");

var txt = document.createTextNode("Start Game");
startButton.appendChild(txt);                                // Append the text to <button>
document.body.appendChild(startButton);



// we'll eventually shuffle here...
//////////

//Shuffle the deck
function shuffle(deck) {
  var m = deck.length, t, i;
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
  $container.append('<div class="card"><div class="face">' + deck[i] + '</div></div>')
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
    if (pick1.text() == pick2.text()){
      console.log("true")
      pick1 = null
      pick2 = null
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
    $('.face').animate({opacity: 1});
  },1000);
  setTimeout(function() {
    $('.face').fadeOut();
  },7000)

  setTimeout(function() {
    setInterval(function() {
      if($timer.html() > 0) {
        $timer.text($timer.html() -1)
      }
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

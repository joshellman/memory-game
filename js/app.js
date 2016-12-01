var $container = $('#container')

var pick1 = null
var pick2 = null

// all of our cards:
var deck = ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'e', 'e', 'f', 'f', 'g', 'g', 'h', 'h', 'i', 'i', 'j', 'j']

// we'll eventually shuffle here...
//////////

// deal the cards:
for(var i = 0; i < deck.length; i += 1) {
  $container.append('<div class="card"><div class="face">' + deck[i] + '</div></div>')
}
//collection of '.face' divs that we already
var $faces = $(".face")


// when you click a '.face':
$faces.on('click', function(){
  if(pick1 == null) {
    pick1 = $(this)[0] //<-Should array be placed here or below after innerHTML??
  } else {
    pick2 = $(this)[0]

    // if they're equal, do stuff, otherwise, do other stuff.
    if (pick1.innerHTML == pick2.innerHTML){
    console.log("true")
    } else {
    console.log("false")
    }



    // but either way: set pick1 and pick2 back to null at the end of this else
    pick1 = null
    pick2 = null
  }

  // animate its transparency to '1'
  $(this).animate({opacity: 1})

  // print the text thats inside to the console
  console.log($(this).text())
})






// for (var i = 0; i < cards.length; i++) {
//     tiles[i].drawFaceDown();
// }
//
// mouseClicked = function() {
// };

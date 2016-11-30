console.log ('Its loaded')
//var container = document.querySelector('#container')
var $container = $('#container')
for(var i = 0; i < 20; i += 1) {
  $container.append('<div class="card"></div>')

}




/*
 * Check ascii code for spacebar and call goToLocation in global to change URL
 */



function checkKeyPress(e) {
  if (e.keyCode == 32) {
    goToLocation('/feed');
  }
}

function checkMousePress(e) {
  if ('click') {
    goToLocation('/feed');
  }
}

window.addEventListener('keypress', checkKeyPress);
document.getElementById("fade_text").addEventListener('click', checkMousePress);

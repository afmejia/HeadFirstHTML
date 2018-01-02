function degreesToRadians(degrees) {
  return degrees * Math.PI / 180;
}

window.onload = function() {
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext('2d');

  context.beginPath();
  context.arc(100, 100, 75, degreesToRadians(270), 0, true);
  context.stroke(); 
};

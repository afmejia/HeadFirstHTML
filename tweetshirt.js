function drawText(canvas, context) {
  var selectObj = document.getElementById("foregroundColor");
  var index = selectObj.selectedIndex;
  var fgColor = selectObj[index].value;

  context.fillStyle = fgColor;
  context.font = "bold 1em sans-serif";
  context.textAlign = "left";
  context.fillText("I saw this tweet", 20, 40);

  // Get the selected tweet from the tweets menu
  var selectObj = document.getElementById('tweets');
  var index = selectObj.selectedIndex;
  var tweet = selectObj[index].value;

  // Draw the tweet
  context.font = "italic 1.2em serif";
  context.fillText(tweet, 30, 100);

  context.font = "bold 1em sans-serif";
  context.textAlign = "right";
  context.fillText("and all I got was this lousy t-shirt!", canvas.width-20,
                      canvas.height-40);

}

function fillBackgroundColor(canvas, context) {
  var selectObj = document.getElementById("backgroundColor");
  var index = selectObj.selectedIndex;
  var bgColor = selectObj.options[index].value;
  context.fillStyle = bgColor;
  context.fillRect(0, 0, canvas.width, canvas.height);
}

  function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
  }

function drawCircle(canvas, context) {
  var radius = Math.floor(Math.random() * 40);
  var x = Math.floor(Math.random() * canvas.width);
  var y = Math.floor(Math.random() * canvas.height);

  context.beginPath();
  context.arc(x, y, radius, 0, degreesToRadians(360), true);

  context.fillStyle = "lightblue";
  context.fill();
}

function drawSquare(canvas, context) {
  var w = Math.floor(Math.random() * 40);
  var x = Math.floor(Math.random() * canvas.width);
  var y = Math.floor(Math.random() * canvas.height);

  context.fillStyle = "lightblue";
  context.fillRect(x, y, w, w);
}

function makeImage() {
  var canvas = document.getElementById("tshirtCanvas");
  canvas.onclick = function() {
    window.location = canvas.toDataURL("image/png");
  };
}

function previewHandler() {
  var canvas = document.getElementById('tshirtCanvas');
  var context = canvas.getContext("2d");
  fillBackgroundColor(canvas, context);

  var selectObj = document.getElementById('shape');
  var index = selectObj.selectedIndex;
  var shape = selectObj[index].value;

  if (shape == "squares")
    for (var squares = 0; squares < 20; squares++)
      drawSquare(canvas, context);
  else if (shape == "circles")
    for (var circles = 0; circles < 20; circles++)
      drawCircle(canvas, context);

  drawText(canvas, context);

  var twitterBird = new Image();
  twitterBird.src = "twitterbird.png";
  twitterBird.onload = function() {
      context.drawImage(twitterBird, 20, 120, 70, 70);
  };
}

function  updateTweets() {
  var tweetsSelection = document.getElementById("tweets");

  tweets = ["Twitter API is not working", "So I have to do it manually",
            "It sucks, I know", "But later I will research"];
  for (var i = 0; i < tweets.length; i++) {
    var tweet = tweets[i];
    var option = document.createElement("option");
    option.text = tweet;

    tweetsSelection.options.add(option);
  }

  tweetsSelection.selectedIndex = 0;
}

window.onload = function() {
  var button = document.getElementById('previewButton');
  updateTweets();
  button.onclick = previewHandler;
  makeImage();  
};

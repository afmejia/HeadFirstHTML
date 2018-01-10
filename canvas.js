function updateTweets(tweets) {
  var tweetsSelection = document.getElementById("tweets");
  for (var i = 0; i < tweets.length; i++) {
    tweet = tweets[i];
    var option = document.createElement("option");
    option.text = tweet.text;
    option.value = tweet.text.replace("\"", "'");

    tweetsSelection.options.add(option);
  }
  tweetSelection.selectedIndex = 0;
}

window.onload = function() {
    var canvas = document.getElementById('tshirtCanvas');
    if (canvas.getContext) {
      var context = canvas.getContext("2d");
      context.fillRect(10, 10, 100, 100 );
    }
    else {
      alert("Hey you!: update your browser");
    }

    var selectObj = document.getElementById('backgroundColor');
    var index = selectObj.selectedIndex;
    var bgColor = selectObj[index].value;
    alert(selectObj);
    alert(index);
    alert(bgColor);

    var selectObj = document.getElementById('shape');
    var index = selectObj.selectedIndex;
    var shape = selectObj[index].value;
    alert(selectObj);
    alert(index);
    alert(shape);

    var selectObj = document.getElementById('foreGroundColor');
    var index = selectObj.selectedIndex;
    var fgColor = selectObj[index].value;
    alert(selectObj);
    alert(index);
    alert(fgColor);
};

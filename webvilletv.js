var position = 0;
var playlist;
var video;

function errorHandler() {
  var video = document.getElementById("video");
  if (video.error) {
    video.poster  = "images/technicaldifficulties.jpg";
    alert(video.error.code);
  }
}

function getFormatExtension() {
  if (video.canPlayType("video/mp4") != "")
    return ".mp4";
  else if (video.canPlayType("video/webm") != "")
    return ".webm";
  else if (video.canPlayType("video/ogg") != "")
    return ".ogv";
}

function nextVideo() {
  // Increment the position in the playlist array
  position++;

  // If we hit the end of the list, we'll just loop back araund by setting the
  // position to zero again
  if (position >= playlist.length)
    position = 0;

  // Set the source of the player to the next video
  video.src = playlist[position] + getFormatExtension();
  video.load();
  video.play();
}

window.onload = function() {
   // We set up our playlist with three videos
   playlist = ["video/preroll", "video/areyoupopular",
               "video/destinationearth"];

   // Grab the video element
   video = document.getElementById("video");

   // Add a handler for the video ended event
   video.addEventListener("ended", nextVideo, false);
   video.addEventListener("error", errorHandler, false);

   // Set the src for the first video
   video.src = playlist[position] + getFormatExtension();

   // Load the video and play it
   video.load();
   video.play();
   console.log("Playing" + video.src);
};

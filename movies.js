function getTimeFromString(timeString) {
  var theTime = new Date();
  var time = timeString.match(/(\d+)(?::(\d\d))?\s*(p?)/);
  theTime.setHours( parseInt(time[1]) + (time[3] ? 12 : 0) );
  theTime.setMinutes( parseInt(time[2]) || 0 );
  return theTime.getTime();
}

window.onload = function() {
  var movie1 = {
    name: "Plan 9 from Outer Space",
    genre: "cult classic",
    rating: 2,
    showtimes: ["3:00pm", "7:00pm", "11:00pm"],
    getNextShowing: function() {
      var now = new Date().getTime();

      for (var i = 0; i < this.showtimes.length; i++) {
        var showtime = getTimeFromString(this.showtimes[i]);
        if ((showtime - now ) > 0)
          return  "Next showing of " + this.name + " is " + this.showtimes[i];
      }

      return null;
    }
  }

  var movie2 = {
    name: "Forbidden Planet",
    genre: "classic sci-fi",
    rating: 5,
    showtimes: ["5:00pm", "9:00pm"],
    getNextShowing: function() {
      var now = new Date().getTime();

      for (var i = 0; i < this.showtimes.length; i++) {
        var showtime = getTimeFromString(this.showtimes[i]);
        if ((showtime - now ) > 0)
          return  "Next showing of " + this.name + " is " + this.showtimes[i];
      }

      return null;
    }
  }

  // Showing next showtime based in the current
  alert(movie1.getNextShowing());
  alert(movie2.getNextShowing());
  };

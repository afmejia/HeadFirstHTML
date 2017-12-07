function bark(dog) {
  if (dog.weight > 25)
    alert("Woof");
  else
    alert("yip");
}

function loseWeight(dog) {
  dog.weight -= 10;
}

window.onload = function() {
  var fido = {
    name: "Fido",
    weight: 40,
    breed: "Mixed",
    loves: ["walks", "fetching balls"],
    bark: function() {
      alert("Woof woof!");
    }
  };

  /*bark(fido);

  var breed = fido["breed"];
  if (breed == "Mixed")
    alert("Best in show");

  fido.weight = 24;
  fido.breed = "Chawalla/Great Dane mix";
  fido.loves.push("chewing bones");
  bark(fido);

  var prop;
  // Looping across all the properties of the object
  for (prop in fido) {
    alert("Fido has a " + prop + " property ");
    if (prop == "name")
      alert("This is " + fido[prop]);
  }

  // Having fun with Objects
  var likes = fido.loves;
  var likeString = "Fido likes";

  for (var i = 0; i < likes.length; i++)
    likeString += " " + likes[i];

  alert(likeString)*/

  fido.bark();
}

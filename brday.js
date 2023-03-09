
  $(".dmx").on("click", function() {
    var tom1 = new Audio("sounds/Hbday.mp3");
      tom1.play();
   $("h1").html("Happy beautiful birthday baby😊");
   $("h1").css("color", "#FF0303");
   $(".dumb p").html("you're amazing and i really cherish you. Charming loves You always 💖");
   $(".dumb p").css("color", "#2B3467");
   var image = "images/adeandsadi.jpg";
   $("body").css("background-image", "url("+ image +")");

      setTimeout( function() {
        $("h1").html("It's my baby big day.");
        $("h1").css("color", "#2B3467");
        $(".dumb p").html("Sadiat Oluwakemisola Olanipekun is officially +1, on this beautiful day of March 9Th of 2023. Wishing you a very happy birthday and a year filled with love, adventure and prosperity.");
        $(".dumb p").css("color", "#E96479");
        var image = "images/bdayg.jpg";
        $("body").css("background-image", "url("+ image +")");
      }, 8000);

  });


$("#testimonials").on("click", function() {
  var sdd = prompt("what is your name?.");
  alert("Hi, " + sdd + " the Venue is actually a nice location but so sorry you're not on the list");
});

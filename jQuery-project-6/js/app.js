//Problem: No user interaction causes no change to application
//Solution: When user interacts cause changes appropriately

var color = $(".selected").css("background-color");

//When clicking on control list items
$(".controls li").click(function() {
  // Deselect sibling elements
  $(this).siblings().removeClass("selected");
  // Select clicked element
  $(this).addClass("selected");
  // cache current color here
  color = $(this).css("background-color");
  });

//When new color is pressed
$("#revealColorSelect").click(function(){
  //Show color select or hide the color select
  $("#colorSelect").toggle();
})

//When color slider changes
$("input[type=range]").change(changeColor);

//Update the new color span with rgb slider values
function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}


// When add color is pressed
  //Append the color to the controls ul
  //Select the new color

//On mouse events on the canvas
  //Draw lines

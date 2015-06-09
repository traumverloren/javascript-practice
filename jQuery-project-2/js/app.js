//Prevent spoilerphobes from seeing spoilers
//Solution: Hide spoilers and reveal them through user interaction

//1. Hide spoiler
$(".spoiler span").hide();
//2. Add a button for the spoiler
$(".spoiler").append("<button>Spoiler Alert!</button>");
//3. When button is pressed

$(".spoiler button").click(function() {
  //3.1 Show the spoiler netx to the button clicked
  $(this).prev().show();
//3.2 Hide the spoiler button
  $(this).remove();
});

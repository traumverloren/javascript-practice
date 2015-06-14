//Problem: It look gross in smaller browser widths and small devices
//Solution: To hide the text links and swap them out with a more appropriate navigation

//Create a select and append to menu
var $select = $("<select></select>");
$("#menu").append($select);

//Cycle over menu links
$("#menu a").each(function(){
  var $anchor = $(this);
  var $option = $("<option></option");

  // Deal with selected options depending on current page
  if($anchor.parent().hasClass("selected")) {
    $option.prop("selected", true);
  }
  //Create an option
    //Option's value is the href of the link
    $option.val($anchor.attr("href"));
    //option's text is the text of the link
    $option.text($anchor.text());
    //Append option to select
    $select.append($option);
});

//Bind change listener to select
  //go to select's location
  $select.change(function(){
    window.location = $select.val();
  })
//Modify CSS to hide links on small widths and show button and select
// Also hides select and button on larger width and show links

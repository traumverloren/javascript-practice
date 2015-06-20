//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times

// Hide hint spans in the form
$("form span").hide();

function passwordEvent(){
   // Find out if password is valid
     if ($(this).val().length > 8) {
       // Hide hint if valid
       $(this).next().hide();
       // else show hint
     } else {
       $(this).next().show();
     }
   }

//When event happens on password input
$("#password").focus(passwordEvent).keyup(passwordEvent);

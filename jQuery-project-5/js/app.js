//Problem: Hints are shown even when form is valid
//Solution: Hide and show them at appropriate times

var $password = $("#password");
var $confirmPassword = $("#confirm_password");

// Hide hint spans in the form
$("form span").hide();

function isPasswordValid() {
  return $password.val().length > 8;
}

function arePasswordsMatching() {
  return $password.val() === $confirmPassword.val();
}

function canSubmit() {
  return isPasswordValid() && arePasswordsMatching();
}

function passwordEvent(){
   // Find out if password is valid
     if (isPasswordValid()) {
       // Hide hint if valid
       $password.next().hide();
       // else show hint
     } else {
       $password.next().show();
     }
   }

function confirmPasswordEvent() {
  if (arePasswordsMatching()) {
    $confirmPassword.next().hide();
  } else {
    $confirmPassword.next().show();
  }
}

function enableSubmitEvent() {
  $("#submit").prop("disabled", !canSubmit());
}

//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();

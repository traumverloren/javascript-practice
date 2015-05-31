var questions = [ ['What is the capital of Oregon?', 'salem'],
                  ['How many protons does an atom of Carbon have?', '12'],
                  ['Where is the island of Molokini located?', 'hawaii'] ];

var question;
var answer;
var response;
var html;
var correctAnswers = 0;
var correct = [];
var wrong = [];

function print(message) {
  document.write(message);
}

function buildList( arr ) {
  var listHTML = '<ol>';
  for ( var i = 0; i < arr.length; i += 1 ) {
    listHTML += '<li>' + arr[i] + '</li>';
  }
    listHTML += '</ol>';
    return listHTML;
}

for (var i = 0; i < questions.length; i+=1 ) {
  question = questions[i][0];
  answer = questions[i][1];
  answer = answer.toLowerCase();
  response = prompt(question);
  if (response === answer) {
    correctAnswers += 1;
    correct.push(question);
  }
  else {
    wrong.push(question);
  }
}

html = "You got " + correctAnswers + " right.  Good Job!";
html += "<h2>You got these correct:</h2>";
html += buildList(correct);
html += "<h2>You got these wrong:</h2>";
html += buildList(wrong);
print(html);

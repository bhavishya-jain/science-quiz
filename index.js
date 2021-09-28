var chalk = require('chalk');
var readlineSync = require("readline-sync");

var score = 0;

// array of objects
var questions = [{
  question: "The energy of food is measured in____? ",
  answer: "Calories"
},
{
  question: "Name an instrument which is used to measure the Density of milk? ",
  answer: "Lactometer"
},
{
  question: "Name an instrument used to measure electric resistance? ",
  answer: "Ohmmeter"
},
{
  question: "Name the scientist who had discovered that earth revolves round the sun? ",
  answer: "Copernicus"
},
{
  question: "Small Pox vaccine was invented by_____? ",
  answer: "Louis Pasteur"
}];

function welcome() {
 var userName = readlineSync.question(chalk.yellow("What's your name? "));

  console.log(chalk.blue("Welcome "+ userName + " to SCIENCE QUIZ"));
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log(chalk.green("You are right!"));
    score = score + 1;
    
  } else {
    console.log(chalk.red("You are wrong!"));
   
  }

  console.log(chalk.magentaBright("current score: ", score));
  console.log("-------------")
}

function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function dispScore() {
  console.log(chalk.yellowBright("Your Final Score: ", score));
  console.log(chalk.greenBright("Thanks for playing!"))
}


welcome();
game();
dispScore();



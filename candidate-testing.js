const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";


//TODO: Variables for Part 2
let question1 = "Who was the first American woman in space? ";
let question2 = "True or false: 5 kilometer == 5000 meters? ";
let question3 = "(5 + 3)/2 * 10 = ? ";
let question4 = "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ";
let question5 = "What is the minimum crew size for the ISS? ";
let questions = [question1,question2,question3,question4,question5];
let correctAnswers = ["Sally Ride","true","40","Trajectory","3"];
let candidateAnswers = [];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Please enter your name: ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //candidateAnswer = input.question(question);
  for(let i = 0; i < questions.length; i++) {
    candidateAnswers.push(input.question(questions[i]));
  }
  //console.log(candidateAnswers);
}

function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  // if (candidateAnswers === correctAnswer) {
  //       console.log("Congrates, You entered a correct answer!");
  // } else {
  //       console.log("Sorry, your answer is incorrect.");
  // }
  // TODO 2.3
  //Replace the basic feedback from TODO 1.2c with a template literal that displays each of the candidate’s responses in addition to the corresponding correct answers.
  let count = 0;
  console.log(`Candidate Name: ${candidateName}`);
  for(let i = 0; i < 5; i++){
    console.log(`${i+1}) ${questions[i]}
Your Answer: ${candidateAnswers[i]}
Correct Answer: ${correctAnswers[i]}`);
    if(candidateAnswers[i].toLowerCase() == correctAnswers[i].toLowerCase()){
        count++;        
    }
  }

  let grade; 
  let status;
  //TODO 3.2 use this variable to calculate the candidates score.
  grade = (count/questions.length) * 100; 
  if (grade < 80){
    status = "FAILED";
  } else{
    status = "PASSED";
  }
  console.log(`>>> Overall Grade: ${grade}% (${count} of ${questions.length} responses correct) <<<`);
  console.log(`>>> Status: ${status} <<<`);
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log("Hello, " + candidateName + "!" );
  askQuestion();
  gradeQuiz(this.candidateAnswers);  
  
}

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};
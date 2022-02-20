const readLineSync = require('readline-sync');

// const question1=readLineSync.question(`What's your name?`);
console.log('Welcome to the FiestyQuiz\n');

let score =0;
let questionsList=[
  {
    question:'Which of the following keywords is used to define a variable in Javascript?',
   option:['var','let','both','none'],
   answer:'3'
  },
  {
    question:'How can a datatype be declared to be a constant type?',
    option:['var','let','final','const'],
    answer:'4'
  },
  {
    question:'What keyword is used to check whether a given property is valid or not?',
    option:['in','is in','exits','lies'],
    answer:'1'
  },
   {
    question:`What's the type of null?`,
    option:['boolean','undefined','Object','NAN'],
    answer:'3'
  },
   {
    question:`output for print(NaN === NaN);`,
    option:['true','undefined','false','error'],
    answer:'3'
   }

]

function checkScore(userInput,answer)
  {
    if(userInput.toLocaleLowerCase()===answer.toLowerCase())
    {
      console.log("you are right 📜 ☕");
      score++;
    }
    else
    { 
      console.log("Wrong Answer");
   
    }
    console.log(`your current score is ${score}`);
     console.log("--------------------------");
  }


function play(questionsList)
  {
      for(let i=0;i<questionsList.length;i++)
        {
          console.log(questionsList[i].question);
          (questionsList[i].option).forEach((opt,index)=>console.log(`${index+1} ${opt}`));

          const userInput=readLineSync.question('Enter your answer as 1 or 2 or 3 or 4\n');
          checkScore(userInput,questionsList[i].answer);
        }

  }


play(questionsList);
console.log(`your total score is ${score}`)
console.log("----------****Happy Quizzing****----------------");




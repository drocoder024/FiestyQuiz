const readLineSync = require('readline-sync');

// const question1=readLineSync.question(`What's your name?`);
console.log('Welcome to the FiestyQuiz\n');

let score =0;
let questionsList=[
  {
    question:'Which of the following keywords is used to define a variable in Javascript?',
   option:{A:'var',B:'let',C:'both',D:'none'},
   answer:'C'
  },
  {
    question:'How can a datatype be declared to be a constant type?',
    option:{A:'var',B:'let',C:'final',D:'const'},
    answer:'D'
  },
  {
    question:'What keyword is used to check whether a given property is valid or not?',
    option:{A:'in',B:'is in',C:'exits',D:'lies'},
    answer:'A'
  },
   {
    question:`What's the type of null?`,
    option:{A:'boolean',B:'undefined',C:'Object',D:'NAN'},
    answer:'C'
   },
   {
    question:`output for print(NaN === NaN);`,
    option:{A:'true',B:'undefined',C:'false',D:'error'},
    answer:'C'
   }

]

function play(question,option,answer)
  {
       console.log(question);
       Object.keys(option).forEach(e=>console.log(`${e}: ${option[e]}`));
    let userAnswer=readLineSync.question('Enter your answer as A or B or C or D\n');
  
  
    if(userAnswer.toLocaleLowerCase()===answer.toLowerCase())
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


questionsList.forEach(ques=>play(ques.question,ques.option,ques.answer));
console.log(`your total score is ${score}`)
console.log("----------****Happy Quizzing****----------------");




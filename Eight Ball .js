//Create a variable.
let userName = 'Oscar';
//ternary expression that decides what to do if the user enters a name or not.
userName ? console.log(`Hello, ${userName}!.`) : console.log('Hello');
//Variable named userQuestion. wiht question the user would like to ask. 
let userQuestion = 'Can you asnwer my question?';
//console log for the question.
console.log(`The user asked: ${userQuestion}`);
//generate a random number between 0 and 7.
let randomNumber = 
    Math.floor(Math.random() * 8);
//control flow that takes in the randomNumber. Create a if/else switch statements.
let eightBall = 0;
switch (randomNumber) { 
  case 0:
    eightBall = 'It is certain';
    break;
    case 1:
    eightBall = 'It is decidedly so';
    break;
    case 2:
    eightBall = 'Reply hazy try again';
    break;
    case 3:
    eightBall = 'Cannot predict now';
    break;
    case 4:
    eightBall = 'Do not count on it';
    break;
    case 5:
    eightBall = 'My sources say no';
    break;
    case 6:
    eightBall = 'Outlook not so good';
    break;
    case 7:
    eightBall = 'Signs point to yes';
    break;
}
//console.log the magical eight ball.
    console.log(eightBall);


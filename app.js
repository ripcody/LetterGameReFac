let secretLetter = getSecretLetter();
let numGuesses = 5;

do {

  getUsersGuess();

  if (checkUsersGuess(usersGuess, secretLetter)) {
    alert(sendUserMessage());
    numGuesses = 0;
  }

  else {

    if (userGuessAfter(usersGuess, secretLetter)) {
      alert(sendUserMessage());
    }
    else {
      alert(sendUserMessage());
    }

    numGuesses--;
    if (numGuesses == 0) {
      alert(sendUserMessage());
    }
  }

} while (numGuesses > 0);
playAgain();



function getSecretLetter() {
  let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let rnd = parseInt(Math.random() * 26);
  return alphabet[rnd];
}

function getUsersGuess() {
  if (numGuesses == 5) {
    return usersGuess = prompt('I am thinking of a letter. Can you guess it? You have '
      + numGuesses + ' Guesses.').substring(0, 1).toUpperCase();
  } else if (numGuesses == 1) {
    return usersGuess = prompt('Try again you have '
      + numGuesses + ' Guess left.').substring(0, 1).toUpperCase();
  } else {
    return usersGuess = prompt('Try again you have ' + numGuesses +
      ' Guesses.').substring(0, 1).toUpperCase();
  }
}

function checkUsersGuess(usersGuess, secretLetter) {
  if (usersGuess == secretLetter) {
    return true;
  } else
    return false;
}

function userGuessAfter(usersGuess, secretLetter) {
  return secretLetter < usersGuess;
}

function sendUserMessage() {
  if (numGuesses == 0) {
    return 'You are out of guesses the secret letter is ' + secretLetter;
  }
  if (usersGuess == secretLetter) {
    return 'Congratulations! The secret letter is ' + secretLetter;
  } else if (secretLetter < usersGuess) {
    return 'The secret letter is before ' + usersGuess;
  } else {
    return 'The secret letter is after ' + usersGuess;
  }
}

function playAgain() {
  let plyAgain = prompt('Would you like to play again(Y/N)').substring(0, 1).toUpperCase();
  if (plyAgain == 'Y') {
    return location.reload();
  } else {
    return numGuesses == 0;
  }
}

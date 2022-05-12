let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let rnd = parseInt(Math.random() * 26);
let secretLetter = alphabet[rnd];
let numGuesses = 5;

do {

  let usersGuess = prompt('I am thinking of a letter. Can you guess it? You have ' + numGuesses + ' Guess/es.').substring(0, 1).toUpperCase();

  if (secretLetter == usersGuess) {
    alert('Congratulations! The secret letter is ' + secretLetter);
    numGuesses = 0;
  }

  else {

    if (secretLetter < usersGuess) {
      alert('The secret letter is before ' + usersGuess);
    }
    else {
      alert('The secret letter is after ' + usersGuess);
    }

    numGuesses--;
    if (numGuesses == 0) {
      alert('You are out of guesses the secret letter is ' + secretLetter);
    }
  }

} while (numGuesses > 0);

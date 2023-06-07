function RPS() {
  this.wins = 0;
  this.losses = 0;
  this.ties = 0;
  this.getUserChoice = function () {
    let userChoice = prompt(
      "please choose 'r' for rock, 'p' for paper, or 's' for scissors"
    );
    return userChoice;
  };
  this.getComputerChoice = function () {
    let randomNum = Math.floor(Math.random() * 3);
    let computerChoice;
    if (randomNum === 0) {
      computerChoice = 'r';
    } else if (randomNum === 1) {
      computerChoice = 's';
    } else if (randomNum === 2) {
      computerChoice = 'p';
    }
    return computerChoice;
  };

  this.playGame = function () {
    let userChoice = this.getUserChoice();
    let computerChoice = this.getComputerChoice();
    alert(`You chose: ${userChoice}\nComputer chose: ${computerChoice}`);

    if (
      (userChoice === 'r' && computerChoice === 's') ||
      (userChoice === 's' && computerChoice === 'p') ||
      (userChoice === 'p' && computerChoice === 'r')
    ) {
      this.wins++;
      alert("You've won " + this.wins + ' time(s)!');
    } else if (userChoice === computerChoice) {
      this.ties++;
      alert("You've tied " + this.ties + ' time(s).');
    } else {
      this.losses++;
      alert("You've lost " + this.losses + ' time(s).');
    }

    //   4th hint
    alert(
      `Current Standings:\nWins: ${this.wins}\nLosses: ${this.losses}\nTies: ${this.ties}`
    );

    let playAgain = confirm('Do you want to play again?');

    let totalPlays = this.wins + this.losses + this.ties;

    if (playAgain === true && totalPlays < 10) {
      this.playGame();
    }
  };
}

const newGame = new RPS();
newGame.playGame();

var argButtonName, argButtonPaper, argButtonRock, argButtonScissors, buttonPaper, buttonRock, buttonScissors, buttonTest;



function buttonClicked(argButtonName) {
    clearMessages();
    console.log(([argButtonName,' został kliknięty',argButtonRock,'kamień został kliknięty',argButtonPaper,'papier został kliknięty',argButtonScissors,'nożyczki zostały kliknięte'].join('')));
        if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
          printMessage('Wygrywasz!');
        } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
          printMessage('Wygrywasz!');
        } else if (argPlayerMove == 'nozyce' && argComputerMove == 'papier') {
          printMessage('Wygrywasz!');
        } else if (argPlayerMove == 'nozyce' && argComputerMove == 'nożyce') {
          printMessage('Remis!');
        } else {
          printMessage('Przegrywasz :(');
        }
        printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
        }
    
playerMove = argButtonName;
playerMove = getMoveName(playerInput);
console.log('ruch gracza to: ' + playerMove);
randomNumber = Math.floor(Math.random() * 3 + 1);
console.log('wylosowana liczba to: ' + randomNumber);
computerMove = getMoveName(randomNumber);
console.log('ruch komputera to: ' + computerMove);
displayResult(playerMove, computerMove);
}
  buttonTest = document.getElementById('button-test');
  buttonTest.addEventListener('click', function(){ buttonClicked('Guzik TEST'); });
  buttonRock = document.getElementById('button-rock');
  buttonRock.addEventListener('click', function(){ buttonClicked('kamień'); });
  buttonPaper = document.getElementById('button-paper');
  buttonPaper.addEventListener('click', function(){ buttonClicked('papier'); });
  buttonScissors = document.getElementById('button-scissors');
  buttonScissors.addEventListener('click', function(){ buttonClicked('nożyce'); });
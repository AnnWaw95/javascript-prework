function printMessage(msg){
	var div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

var ComputerMove, item, PlayerMove;
ComputerMove = 'kamień';
printMessage('Zagrałem ' + ComputerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');
PlayerMove = 'papier';
printMessage('Zagrałem' + PlayerMove + '! Jeśli Twój ruch to nożyce, to wygrywasz!');
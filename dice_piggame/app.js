/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var score, roundScore, activePlayer;

var total = 0;
scores = [0, 0];
roundScore = 0;
activePlayer = 1;	// switching activePlayer 1, 2 

dice_p = document.querySelector('.dice');
dice_p.style.display = 'none';

document.getElementById("score-0").textContent = '0';
document.getElementById("score-1").textContent = '0';
c_0 = document.getElementById("current-0");
c_0.textContent = '0';
c_1 = document.getElementById("current-1");
c_1.textContent = '0';

function judge(){

}


// roll the dice

document.querySelector(".btn-roll").addEventListener('click', function(){
	var dice_n = Math.floor(Math.random()*6)+1;
	dice_p.src = 'dice-' + dice_n +'.png';
	dice_p.style.display = 'block';

	if (dice_n == 1){
		total = 0
		if (activePlayer == 1) {
			c_0.textContent = total
		}
		else {
			c_1.textContent = total
		}
		activePlayer == 1 ? activePlayer = 2 : activePlayer = 1;
	}
	else {
		total += dice_n;
		if (activePlayer == 1) {
			c_0.textContent = total
		}
		else {
			c_1.textContent = total
		}
	}

	function turnover(){
	};		

});







// 2. 굴린 값을 더한다. 언제까지? 1이 안나오는 한, 계속 더한다. 
// 3. 턴 넘길수 있다.
// 2. 주사위 변환, 점수가 나옴
// 3. 점수를 각 플레이어의 점수판에 반영한다.
// 4. 
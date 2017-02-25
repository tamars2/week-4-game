var wins = 0,
	losses = 0,
	randomNumber = 0,
	userNumber = 0,
	gems = [];

function setupGame() {
	randomNumber = Math.floor(Math.random() * (120 - 19) + 19);
	console.log(randomNumber);
	userNumber = 0;
	$('#randomNumber').html(randomNumber);
	$('#userScore').html('Your score: 0');
	for (var i = 0; i < 4; i++){
		gems[i] = Math.floor(Math.random() * (12 - 1) + 1);
	};
	//cheatmode engaged!
	console.log(gems[0]);
	console.log(gems[1]);
	console.log(gems[2]);
	console.log(gems[3]);
};

setupGame();

$('.gem1').on("click", function(){
	userNumber = userNumber + gems[0];
	$('#userScore').html('Your Score: ' + userNumber);
	checkWin();
});
$('.gem2').on("click", function(){
	userNumber = userNumber + gems[1];
	$('#userScore').html('Your Score: ' + userNumber);
	checkWin();
});
$('.gem3').on("click", function(){
	userNumber = userNumber + gems[2];
	$('#userScore').html('Your Score: ' + userNumber);
	checkWin();
});
$('.gem4').on("click", function(){
	userNumber = userNumber + gems[3];
	$('#userScore').html('Your Score: ' + userNumber);
	checkWin();
});

function checkWin () {
if (userNumber === randomNumber) {
	wins = wins + 1;
	$('#wins').html('Wins: ' + wins);
	setupGame();
	}
else if (userNumber >= randomNumber + 1) {
		losses = losses +1;
		$('#losses').html('Losses: ' + losses);
		setupGame();
	}
};
 
// function checkLoss () {
// 	if (userNumber >= randomNumber + 1) {
// 		losses = losses +1;
// 		$('#losses').html('Losses: ' + losses);
// 		setupGame();
// 	};
// };
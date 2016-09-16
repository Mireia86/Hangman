$(document).ready(function() {
	var words=["cats","dogs","windows","fish","horse","dolphin","bird"];

	$(".Start").on("click", function() {
		$(".wordsGuess").empty();
	var phrase = words[Math.floor(Math.random()*words.length)];
	    $(".wordsGuess").append(phrase);
	var newWords = [];

		for (var i=0; i<=phrase.length-1; i++) {
			newWords.push(" __");
		}


		$(".wordsGuess").html(newWords);

console.log(phrase);
var aciertos=0;
var fallos=0;

	$(".search").on("click",function(){
		var play=false;
	    var valueInput = $(".spaceWrite").val();
		$(".letter").append("  " + valueInput + "  ");
		if (valueInput === $(".letter").val()) {
			alert ("Letter was used yet!!");
		}
				
		var wordsSpace= phrase.split('');
		

		for (var i=0; i<=wordsSpace.length; i++) {
			if (valueInput === wordsSpace[i]) {
				newWords[i]=wordsSpace[i];
				$(".wordsGuess").html(newWords.join(" "));
				play=true;
				aciertos++;
				console.log(aciertos);

			}
		}
		if (aciertos === wordsSpace.length) {
				alert("YOU WIN! The word was " + phrase);
			}

		if (!play) {
			fallos=fallos+1;
			$(".fakes").html("Fallos: " + fallos);
		}
		if(fallos===6){
			alert("YOU LOST!! The word was " + phrase);
		}
		$(".spaceWrite").select();

	});	

	});
});



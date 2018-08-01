var questionNum = 1;
var score = 0;
var questionBox = ["Trevor Noah is South African?" , "In Pride and Prejudice there were 4 sisters?" , "Mariam was 16 when she was married?"];
var solutionBox = [true ,false ,false];

function showQuestion(){
	$(questionDisplayed).html(questionBox[questionNum-1]);
	$("#tickOnFalse").addClass("d-none");
	$("#tickOnTrue").addClass("d-none");

}

function questionCounter(){

	if(questionNum>=3){
		$("#result").html("Your score is " + score);
		$("#resultOption").html("Play Again");
		questionNum = 1;
		score = 0;
		$("#resultOption").click(function(){
			showQuestion();
		});
	}

	else{ 
		questionNum++;
	}
}


function answerDisplay(iscorrect){
	
	if (iscorrect === true){
		$("#modalPop").modal("show");
		$("#result").html("Correct");
		$("#resultOption").html("Next");
		score++;
		questionCounter();	
		showQuestion();
		
	}

	else{
		$("#modalPop").modal("show");
		$("#result").html("Incorrect");
		$("#resultOption").html("Next");
		questionCounter();		
		showQuestion();
	}

}

function optionSelected(option){

	if(option===solutionBox[questionNum-1]){
		answerDisplay(true);
		if(option === true){
		$("#tickOnTrue").removeClass("d-none");
		}
		if(option === false){
		$("#tickOnFalse").removeClass("d-none");
		}
	}

	else{
		answerDisplay(false);
	}
}	

$( document).ready(function(){
	$("#tickOnTrue").addClass("d-none");
	$("#tickOnFalse").addClass("d-none");
	var totalQuestions = questionBox.length;
	showQuestion();
});



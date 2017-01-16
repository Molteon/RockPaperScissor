//Computer Choice is randomized then saved into a variable "computerChoice";
var computerChoice = Math.random();
if (computerChoice <= 0.33) {
	var computerChoice = "Paper";
}
else if (computerChoice >= 0.34 && computerChoice <= 0.66)
{
	var computerChoice = "Rock";
}
else{
	var computerChoice = "Scissor";
}


//If user clicks on the button Rock, it will compare Rock against computerChoice;

var rock = function(){
	if(computerChoice == "Scissor")
	{
		document.getElementById("userChoiceForm").elements["result"].value = "Win";
	}

	else if (computerChoice == "Rock") {
		document.getElementById("userChoiceForm").elements["result"].value = "Tie";
	}
	else
	{
		document.getElementById("userChoiceForm").elements["result"].value = "Lost";
	}
}

//If user clicks on the button Paper, it will compare Paper against computerChoice;

var paper = function(){
	if(computerChoice == "Scissor")
	{
		document.getElementById("userChoiceForm").elements["result"].value = "Lost";
	}

	else if (computerChoice == "Rock") {
		document.getElementById("userChoiceForm").elements["result"].value = "Win";
	}
	else
	{
		document.getElementById("userChoiceForm").elements["result"].value = "Tie";
	}
}

//If user clicks on the button Scissor, it will compare Scissor against computerChoice;

var scissor = function(){
	if(computerChoice == "Scissor")
	{
		document.getElementById("userChoiceForm").elements["result"].value = "Tie";
	}

	else if (computerChoice == "Rock") {
		document.getElementById("userChoiceForm").elements["result"].value = "Lost";
	}
	else
	{
		document.getElementById("userChoiceForm").elements["result"].value = "Win";
	}
}

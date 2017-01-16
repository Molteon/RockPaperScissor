//Computer Choice Function user to randomize the selection of the computer then it will be saved into a variable "computerChoice";
var computerChoiceFunction = function(){
	var computerChoice = Math.random();
	if (computerChoice <= 0.33) {
		 var computerChoice = "Paper";
		 return computerChoice;
	}
	else if (computerChoice >= 0.34 && computerChoice <= 0.66)
	{
		 var computerChoice = "Rock";
		 return computerChoice;
	}
	else{
		 var computerChoice = "Scissor";
		 return computerChoice;
	}
}


//If user clicks on the button Rock, it will compare Rock against computerChoice;

var rock = function(){
	var computerChoice = computerChoiceFunction();
	if(computerChoice == "Scissor")
	{
		document.getElementById("userChoiceForm").elements["result"].value = "You Win! Computer chose " + computerChoice;
	}

	else if (computerChoice == "Rock") {
		document.getElementById("userChoiceForm").elements["result"].value = "Its a Tie! Computer chose " + computerChoice;
	}
	else
	{
		document.getElementById("userChoiceForm").elements["result"].value = "You Lost. Computer chose " + computerChoice;
	}
}

//If user clicks on the button Paper, it will compare Paper against computerChoice;

var paper = function(){
	var computerChoice = computerChoiceFunction();
	if(computerChoice == "Scissor")
	{
		document.getElementById("userChoiceForm").elements["result"].value = "You Lost. Computer chose " + computerChoice;
	}

	else if (computerChoice == "Rock") {
		document.getElementById("userChoiceForm").elements["result"].value = "You Win! Computer chose " + computerChoice;
	}
	else
	{
		document.getElementById("userChoiceForm").elements["result"].value = "Its a Tie! Computer chose " + computerChoice;
	}
}

//If user clicks on the button Scissor, it will compare Scissor against computerChoice;

var scissor = function(){
	var computerChoice = computerChoiceFunction();
	if(computerChoice == "Scissor")
	{
		document.getElementById("userChoiceForm").elements["result"].value = "Its a Tie! Computer chose " + computerChoice;
	}

	else if (computerChoice == "Rock") {
		document.getElementById("userChoiceForm").elements["result"].value = "You Lost. Computer chose " + computerChoice;
	}
	else
	{
		document.getElementById("userChoiceForm").elements["result"].value = "You Win! Computer chose " + computerChoice;
	}
}

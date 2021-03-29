var idpool = new Array;
var textpool = new Array;
var textIdx  = 0;
var paper = '';
var group = 1;

textpool[0] = 'Adjust (scroll) your browser window appropriately \n so you can see this gray canvas and the button below clearly.\n In each trial, you will see three groups of dots.\n Imagine that this is a bird\'s-eye view of three groups of tourists.';
textpool[1] = 'People from the same group all wear T-shirts in the same color \n so the dots are in three different colors.\n The three groups always have the same number of people.';
textpool[2] = 'Spatially, people from the same group are close together, \n but with some overlap between groups.';
textpool[3] = 'Among all the colored dots, there is one black dot.';
textpool[4] = 'This black dot is a person from one of these three groups.\n However, we DON\'T KNOW the color of her/his T-shirt.';
textpool[5] = 'Please use the (position) information conveyed by the colored dots,\n and judge which group this person (the black dot) belongs to.';
textpool[6] = 'First, please give your answer by clicking the COLOR OF THAT GROUP below.\n You can not change your answer once you click.';
switch (group){
	case 1:
	textpool[7] = 'Next, please tell us how confident you are in the decision that you just made.\n Report your confidence level by clicking one of the four buttons.';
	break;
	case 2:
	textpool[7] = 'Next, estimate how high is the probability \n that you were correct in the decision that you just made.\n Estimate the probability and report the probability by clicking one of the four buttons.';
	break;
}

function demoPage1(){
	$('#canvas').show();
	$('#instruction').show();
	$('#button').show();
	drawCanvas();
	clearButton();
	paper.clear();

	var demo_confIdx = 1;
	var newcolor = pickThreeColor();
	var hexIdx   = newcolor[1];
	drawDots(stiPar.ndot,hexIdx,demo_confIdx);
	newText(textpool[textIdx]);

	makeButton('button_continue').text('Click to continue').on("click", function(){
		textIdx++;
		switch (textIdx){
			case 1:
			case 2:
			case 4:
			case 5:
			idpool[0].remove();
			newText(textpool[textIdx]);
			break;
			case 3: //add a target dot
			idpool[0].remove();
			drawTarget(demo_confIdx,[center[0]+110,center[1]+0]);
			newText(textpool[textIdx]);
			break;
			case 6: //present three buttons for decision choice
			idpool[0].remove();
			newText(textpool[textIdx]);
			clearButton();
			setTimeout(function(){
				//d3.select('#instruction').text('Which group does the black dot belong to?').style('color', '#000000');
				makeButton_d('btn1').style('background-color',hexIdx[0]).on("click", function(){demoPage_confidence()} );
				makeButton_d('btn2').style('background-color',hexIdx[1]).on("click", function(){demoPage_confidence()} );
				makeButton_d('btn3').style('background-color',hexIdx[2]).on("click", function(){demoPage_confidence()} );
			},1500);
		}
	});
}

function demoPage_confidence(){
	textIdx++;
	clearButton();
	clearInstruction();
	idpool[0].remove();
	newText(textpool[textIdx]);
	setTimeout(function(){
		//show confidence buttons
		//d3.select('#instruction').text('How confident are you in your decision?').style('color', '#000000');
		switch (group){
			case 1:
			makeButton('btn1').style('background-color','#CCCCCC').text('very unconfident').on("click", function(){demoPage_onemoreTrial()});
		makeButton('btn2').style('background-color','#CCCCCC').text('somewhat unconfident').on("click", function(){demoPage_onemoreTrial()});
		makeButton('btn3').style('background-color','#CCCCCC').text('somewhat confident').on("click", function(){demoPage_onemoreTrial()});
		makeButton('btn4').style('background-color','#CCCCCC').text('very confident').on("click", function(){demoPage_onemoreTrial()});
		break;
			case 2:
			makeButton('btn1').style('background-color','#CCCCCC').text('very low').on("click", function(){demoPage_onemoreTrial()});
		makeButton('btn2').style('background-color','#CCCCCC').text('somewhat low').on("click", function(){demoPage_onemoreTrial()});
		makeButton('btn3').style('background-color','#CCCCCC').text('somewhat high').on("click", function(){demoPage_onemoreTrial()});
		makeButton('btn4').style('background-color','#CCCCCC').text('very high').on("click", function(){demoPage_onemoreTrial()});
		break;
		}
	},1500);
}

function demoPage_onemoreTrial(){
	clearButton();
	paper.clear();
	clearInstruction();
	idpool[0].remove();
	var newcolor = pickThreeColor();
	var hexIdx  = newcolor[1];
	var demo_confIdx = 3;
	drawDots(stiPar.ndot,hexIdx,demo_confIdx);
	drawTarget(demo_confIdx);
	newText('OK. Let\'s do one more trial for practice.\n We call one presentation of the colored dots plus the black dot "one trial". \n Note that the positions of the three groups and the black dot are different now.');
	setTimeout(function(){
		d3.select('#instruction').text('Which group does the black dot belong to?').style('color', '#000000');
		//make buttons for decision task
		makeButton_d('btn1').style('background-color',hexIdx[0]).on("click", function(){demoPage_onemoreTrial_confidence()} );
		makeButton_d('btn2').style('background-color',hexIdx[1]).on("click", function(){demoPage_onemoreTrial_confidence()} );
		makeButton_d('btn3').style('background-color',hexIdx[2]).on("click", function(){demoPage_onemoreTrial_confidence()} );
	},1500);
}

function demoPage_onemoreTrial_confidence(){
	clearInstruction();
	idpool[0].remove();
		clearButton();
		switch (group){
		case 1:
		newText('We encourage you to use all four buttons for reporting confidence. \n It is IMPORTANT for us to know how your confidnece level varies across trials.');
		break;
		case 2:
		newText('We encourage you to use all four buttons for reporting the probability. \n For example, try NOT to report the same probability in all the trials. \n It is IMPORTANT for us to know how your estimation varies in different trials.');
		break;
		}
		setTimeout(function(){
		switch (group){
			case 1:
			//show confidence buttons
		d3.select('#instruction').text('How confident are you in your decision?').style('color', '#000000');
	    makeButton('btn1').style('background-color','#CCCCCC').text('very unconfident').on("click", function(){demoPage_end()});
	    makeButton('btn2').style('background-color','#CCCCCC').text('somewhat unconfident').on("click", function(){demoPage_end()});
	    makeButton('btn3').style('background-color','#CCCCCC').text('somewhat confident').on("click", function(){demoPage_end()});
	    makeButton('btn4').style('background-color','#CCCCCC').text('very confident').on("click", function(){demoPage_end()});
	    break;
			case 2:
			//show confidence buttons
		d3.select('#instruction').text('How high is the probability that your decision was correct?').style('color', '#000000');
	    makeButton('btn1').style('background-color','#CCCCCC').text('very low').on("click", function(){demoPage_end()});
	    makeButton('btn2').style('background-color','#CCCCCC').text('somewhat low').on("click", function(){demoPage_end()});
	    makeButton('btn3').style('background-color','#CCCCCC').text('somewhat high').on("click", function(){demoPage_end()});
	    makeButton('btn4').style('background-color','#CCCCCC').text('very high').on("click", function(){demoPage_end()});
	    break;
		}
	},1500);
}

function demoPage_end(){
	paper.clear();
	clearInstruction();
	idpool[0].remove();
	clearButton();
	newText('Click the button if you want to run more trials!');
	makeButton('button_continue').text('Continue').on("click", function(){
		clearButton();
		paper.clear();
		setTimeout(function(){
			doTrial();
		},800);
	})

}

function newText(text_to_print){
	idpool[0] = paper.text(center[0], 450, text_to_print)
	.attr('font-size',16);
}


// In each trial, you will see a picture containing three groups of dots.
// Imagine that this is a picture taking from birdeye-view of three groups of people in a parade.
// People from each group wears the T-shirt with color associated with their own group.
// Do you see that there is a black dot with no color?
// Unfortunately,

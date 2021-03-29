// Set experiment variables
//var colMat_r  = [253, 253, 253, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 254, 253, 253, 253, 253, 252, 252, 252, 251, 251, 251, 250, 250, 249, 249, 248, 248, 247, 247, 246, 246, 245, 244, 244, 243, 242, 242, 241, 240, 239, 239, 238, 237, 236, 235, 235, 234, 233, 232, 231, 230, 229, 228, 227, 226, 225, 224, 223, 222, 221, 220, 219, 218, 217, 216, 215, 214, 213, 212, 210, 209, 208, 207, 206, 205, 203, 202, 201, 200, 199, 197, 196, 195, 194, 193, 191, 190, 189, 187, 186, 185, 184, 182, 181, 180, 179, 177, 176, 175, 173, 172, 171, 169, 168, 167, 165, 164, 163, 161, 160, 159, 157, 156, 155, 153, 152, 151, 149, 148, 147, 145, 144, 143, 141, 140, 139, 137, 136, 135, 133, 132, 130, 129, 128, 126, 125, 124, 122, 121, 120, 118, 117, 115, 114, 113, 111, 110, 108, 107, 106, 104, 103, 101, 100, 98, 97, 95, 94, 92, 91, 90, 88, 87, 85, 83, 82, 80, 79, 77, 76, 74, 73, 71, 69, 68, 66, 64, 63, 61, 59, 58, 56, 54, 52, 51, 49, 47, 45, 44, 42, 40, 38, 36, 35, 33, 31, 29, 28, 26, 25, 10, 9, 8, 8, 8, 8, 9, 9, 25, 26, 28, 29, 31, 33, 35, 37, 39, 41, 44, 46, 48, 50, 52, 55, 57, 59, 61, 63, 66, 68, 70, 72, 75, 77, 79, 81, 83, 86, 88, 90, 92, 94, 97, 99, 101, 103, 105, 108, 110, 112, 114, 116, 118, 120, 123, 125, 127, 129, 131, 133, 135, 137, 139, 141, 143, 145, 147, 149, 151, 153, 155, 157, 159, 161, 163, 165, 167, 169, 171, 173, 174, 176, 178, 180, 182, 183, 185, 187, 189, 190, 192, 194, 195, 197, 199, 200, 202, 203, 205, 206, 208, 209, 211, 212, 214, 215, 216, 218, 219, 220, 222, 223, 224, 225, 226, 228, 229, 230, 231, 232, 233, 234, 235, 236, 237, 238, 239, 240, 240, 241, 242, 243, 244, 244, 245, 246, 246, 247, 248, 248, 249, 249, 250, 250, 251, 251, 251, 252, 252, 252];
//var colMat_g  = [98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 98, 99, 99, 99, 99, 100, 100, 100, 101, 101, 101, 102, 102, 103, 103, 104, 104, 105, 105, 106, 106, 107, 107, 108, 108, 109, 110, 110, 111, 111, 112, 113, 113, 114, 115, 115, 116, 117, 117, 118, 119, 119, 120, 121, 122, 122, 123, 124, 124, 125, 126, 126, 127, 128, 128, 129, 130, 130, 131, 132, 132, 133, 134, 134, 135, 136, 136, 137, 138, 138, 139, 139, 140, 141, 141, 142, 142, 143, 144, 144, 145, 145, 146, 146, 147, 147, 148, 148, 149, 149, 150, 150, 151, 151, 152, 152, 153, 153, 154, 154, 155, 155, 155, 156, 156, 157, 157, 157, 158, 158, 159, 159, 159, 160, 160, 160, 161, 161, 161, 162, 162, 162, 162, 163, 163, 163, 164, 164, 164, 164, 165, 165, 165, 165, 166, 166, 166, 166, 166, 167, 167, 167, 167, 167, 167, 168, 168, 168, 168, 168, 168, 169, 169, 169, 169, 169, 169, 169, 169, 169, 169, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 170, 169, 169, 169, 169, 169, 169, 169, 169, 169, 168, 168, 168, 168, 168, 168, 168, 167, 167, 167, 167, 167, 166, 166, 166, 166, 166, 165, 165, 165, 165, 164, 164, 164, 163, 163, 163, 162, 162, 162, 162, 161, 161, 160, 160, 160, 159, 159, 159, 158, 158, 157, 157, 157, 156, 156, 155, 155, 154, 154, 153, 153, 152, 152, 151, 151, 150, 150, 149, 149, 148, 148, 147, 146, 146, 145, 145, 144, 143, 143, 142, 142, 141, 140, 140, 139, 138, 138, 137, 136, 136, 135, 134, 134, 133, 132, 131, 131, 130, 129, 129, 128, 127, 126, 126, 125, 124, 124, 123, 122, 121, 121, 120, 119, 118, 118, 117, 116, 116, 115, 114, 114, 113, 112, 112, 111, 110, 110, 109, 108, 108, 107, 107, 106, 106, 105, 104, 104, 103, 103, 103, 102, 102, 101, 101, 100, 100, 100, 99, 99, 99, 99, 98, 98, 98, 98, 98];
//var colMat_b  = [134, 132, 131, 129, 128, 126, 125, 123, 122, 120, 119, 118, 116, 115, 113, 112, 110, 109, 107, 106, 104, 103, 102, 100, 99, 97, 96, 94, 93, 92, 90, 89, 87, 86, 85, 83, 82, 81, 79, 78, 77, 75, 74, 73, 71, 70, 69, 67, 66, 65, 63, 62, 61, 60, 58, 57, 56, 54, 53, 52, 51, 49, 48, 47, 46, 45, 43, 42, 41, 40, 38, 37, 36, 35, 33, 32, 31, 30, 29, 27, 26, 25, 10, 9, 8, 7, 6, 5, 5, 4, 4, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 5, 6, 7, 7, 8, 10, 25, 26, 27, 28, 30, 31, 32, 34, 35, 36, 38, 39, 40, 42, 43, 44, 46, 47, 48, 50, 51, 52, 54, 55, 56, 58, 59, 61, 62, 63, 65, 66, 68, 69, 71, 72, 73, 75, 76, 78, 79, 81, 82, 84, 85, 87, 88, 90, 91, 93, 94, 96, 97, 99, 100, 102, 103, 105, 106, 108, 109, 111, 112, 114, 116, 117, 119, 120, 122, 123, 125, 126, 128, 129, 131, 133, 134, 136, 137, 139, 140, 142, 143, 145, 146, 148, 149, 151, 152, 154, 155, 157, 158, 160, 161, 162, 164, 165, 167, 168, 169, 171, 172, 173, 175, 176, 177, 179, 180, 181, 182, 184, 185, 186, 187, 188, 189, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 202, 203, 204, 205, 206, 207, 207, 208, 209, 209, 210, 211, 211, 212, 212, 213, 213, 214, 214, 215, 215, 216, 216, 216, 217, 217, 217, 217, 217, 218, 218, 218, 218, 218, 218, 218, 218, 218, 218, 218, 218, 218, 217, 217, 217, 217, 216, 216, 216, 215, 215, 215, 214, 214, 213, 213, 212, 212, 211, 210, 210, 209, 208, 208, 207, 206, 205, 205, 204, 203, 202, 201, 200, 199, 198, 197, 196, 195, 194, 193, 192, 191, 190, 189, 188, 187, 186, 184, 183, 182, 181, 180, 178, 177, 176, 175, 173, 172, 171, 169, 168, 167, 165, 164, 163, 161, 160, 158, 157, 156, 154, 153, 151, 150, 148, 147, 145, 144, 143, 141, 140, 138, 137, 135];
var colMat_r  =[234,234,235,235,235,236,236,236,236,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,237,236,236,236,236,235,235,235,235,234,234,233,233,233,232,232,231,231,230,230,229,228,228,227,227,226,225,225,224,223,223,222,221,220,220,219,218,217,216,216,215,214,213,212,211,211,210,209,208,207,206,205,204,203,202,201,200,199,198,197,196,195,194,193,192,191,190,188,187,186,185,184,183,182,180,179,178,177,176,175,173,172,171,170,169,167,166,165,164,162,161,160,159,157,156,155,154,152,151,150,149,147,146,145,143,142,141,139,138,137,135,134,133,131,130,129,127,126,125,123,122,121,119,118,117,115,114,112,111,110,108,107,105,104,102,101,99,98,97,95,94,92,91,89,88,86,84,83,81,80,78,77,75,74,72,71,69,67,66,64,62,61,59,57,56,54,52,50,48,47,45,43,41,39,37,36,34,31,29,27,25,23,22,21,19,18,17,16,13,12,11,12,13,15,17,18,19,20,22,24,25,28,30,32,35,37,39,41,43,45,47,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,88,91,93,95,97,99,101,103,105,107,109,110,112,114,116,118,120,122,124,126,128,130,131,133,135,137,139,141,142,144,146,148,150,151,153,155,157,158,160,162,163,165,167,168,170,171,173,175,176,178,179,181,182,184,185,187,188,189,191,192,194,195,196,198,199,200,201,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,222,223,224,225,226,226,227,228,228,229,230,230,231,231,232,232,233,233,234];
var colMat_g  =[142,142,142,142,142,142,142,142,142,142,142,142,142,142,143,143,143,143,143,143,143,143,143,144,144,144,144,144,145,145,145,145,146,146,146,146,147,147,147,147,148,148,148,149,149,149,150,150,150,151,151,151,152,152,152,153,153,154,154,154,155,155,155,156,156,157,157,157,158,158,159,159,159,160,160,161,161,161,162,162,162,163,163,164,164,164,165,165,166,166,166,167,167,167,168,168,169,169,169,170,170,170,171,171,171,172,172,172,173,173,173,174,174,174,175,175,175,176,176,176,176,177,177,177,177,178,178,178,179,179,179,179,180,180,180,180,180,181,181,181,181,182,182,182,182,182,182,183,183,183,183,183,184,184,184,184,184,184,184,185,185,185,185,185,185,185,185,185,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,187,187,187,187,187,187,187,187,187,187,187,187,187,187,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,186,185,185,185,185,185,185,185,185,184,184,184,184,184,184,183,183,183,183,183,183,182,182,182,182,182,181,181,181,181,180,180,180,180,179,179,179,179,178,178,178,177,177,177,177,176,176,176,175,175,175,174,174,174,173,173,173,172,172,171,171,171,170,170,170,169,169,168,168,168,167,167,166,166,166,165,165,164,164,163,163,163,162,162,161,161,161,160,160,159,159,158,158,158,157,157,156,156,156,155,155,154,154,154,153,153,152,152,152,151,151,151,150,150,149,149,149,148,148,148,148,147,147,147,146,146,146,146,145,145,145,145,144,144,144,144,144,143,143,143,143,143,143,143,143,143,142];
var colMat_b  =[171,170,168,167,166,165,164,163,161,160,159,158,157,156,155,153,152,151,150,149,148,147,146,145,144,143,142,141,140,139,138,137,136,135,134,133,132,131,130,129,128,127,126,126,125,124,123,122,122,121,120,119,119,118,117,116,116,115,114,114,113,113,112,111,111,110,110,109,109,108,108,108,107,107,106,106,106,105,105,105,104,104,104,104,104,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,103,104,104,104,104,104,105,105,105,106,106,106,107,107,108,108,108,109,109,110,111,111,112,112,113,113,114,115,115,116,117,118,118,119,120,121,121,122,123,124,125,126,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,147,148,149,150,151,152,153,154,156,157,158,159,160,162,163,164,165,166,167,169,170,171,172,173,175,176,177,178,179,180,182,183,184,185,186,187,189,190,191,192,193,194,195,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,222,223,224,225,226,226,227,228,228,229,230,230,231,232,232,233,233,234,234,235,235,236,236,236,237,237,237,238,238,238,239,239,239,239,239,239,240,240,240,240,240,240,240,240,239,239,239,239,239,239,238,238,238,238,237,237,237,236,236,236,235,235,234,234,233,233,232,231,231,230,230,229,228,228,227,226,225,225,224,223,222,221,221,220,219,218,217,216,215,214,213,212,211,210,209,208,207,206,205,204,203,202,201,200,199,198,197,196,195,193,192,191,190,189,188,187,186,184,183,182,181,180,179,178,176,175,174,173,172];
var stim_bins = 360;
var ux     = math.matrix([[-96,0,96],[-128,0,128],[-96,-59,96],[-96,59,96],[-64,0,64],[-51,0,51],[-64,-64,64],[-64,64,64]]); 
var uy     = math.matrix([[0,0,0], [0,0,0], [0,0,0], [0,0,0],[37,-74,37],[30,-59,30],[37,-37,37],[37,-37,37]]); 
var sig_x  = 64;
var sig_y  = 64;
var group  = Math.floor(runif(1,3)); //Math.floor(runif(1,3)); for 1 and 2, use runif(1,3), etc.
var center = new Array(400, 300);
var expPar = {ntrlPerConfig : 65, ITI : 600, nconfig : 4, delayBfResponse : 500, ntrl_pb: 65}; //ntrl_pb: ntrial per block
var stiPar = {dotradius : 1.8, targetradius : 2.3, ndot : 375};
var screen_sizex = 800;
var screen_sizey = 600;
var ntrl   = expPar.ntrlPerConfig*expPar.nconfig; //total number of trials
var nblock = math.ceil(ntrl / expPar.ntrl_pb);
var scr    = {dppx:0.0156,window_width: new Array, window_height: new Array, html_width: new Array, html_height: new Array};
var trl    = {
// trial-by-trial condition
block:      math.kron(math.range(1, nblock+1)._data,math.ones(expPar.ntrl_pb))._data[0],
config:     shuffle(math.kron(math.ones(Math.ceil(ntrl/expPar.nconfig))._data, [1,2,3,4])[0]),

// some random assigned variables
target_x:   math.multiply(math.ones(ntrl),99)._data,
target_y:   math.multiply(math.ones(ntrl),99)._data,
color_data: math.zeros(ntrl,3)._data,
theta:      math.zeros(ntrl)._data,

// observers' response
decision:   math.multiply(math.ones(ntrl),99)._data,
confidence: math.multiply(math.ones(ntrl),99)._data,
};
var timing = {
	stimOn: math.zeros(ntrl)._data,
	decision_rt: math.zeros(ntrl)._data,
	confidence_rt: math.zeros(ntrl)._data,
};
var tag = {
	currentTrl: 0,
	currentBlock: 0,
	init_Time: 0,
	sortindex: new Array,
};
var paper = '';
var subjid = '';

// function presentInstruction_screentest(){
// $('#colorblind_test').hide();	
// paper.text(400, 300, 'This task requires a screen resolution bigger than 800x600.\n Please make sure that your browser window is big enough. \n Make sure you can see this gray canvas and the button below clearly. \n Click the button below to check screen size and to continue.')
// .attr('font-size',20);
// makeButton('checkScreenSize').text('Check screen size').on("click", function(){
// 	CheckBrowserSize();});
// }

function presentInstruction_screentest(){
	$('#welcome').hide();
	$('#screentest').show();
}

function presentInstruction_color(){
	// paper.text(center[0], 450, 'This task tests how people categorize visual targets and \n report their confidence on decisions.')
	// .attr('font-size',20);
	paper.text(center[0], 550, 'Before starting the task, we have to make sure you can see the color of the stimulus.\n Please complete a short test for color vision.\n Click the button below to start the color vision test.')
	.attr('font-size',20);
	makeButton('checkColorVision').text('Check color').on("click", function(){
		StartCBTest();
	//CheckColorBlind();
	//demoPage1();
});
}

function drawCanvas() {
	if (paper.length == 0) {
		paper = new Raphael(document.getElementById('canvas'), screen_sizex, screen_sizey);
	}	
	$('#canvas').show();
// if (paper.length == 0) {
// 		paper = new Raphael(document.getElementById('canvas_container_DEMO'), screen_size, screen_size);
// 	}	
paper.canvas.style.backgroundColor = 'lightgray';
//return paper
}

function doTrial(){
	if (tag.currentTrl < ntrl) {
		console.log(tag.currentTrl);
		var newcolor = pickThreeColor();
	var hexIdx   = newcolor[1]; //Read out the color picked for this trial
	confIdx      = trl.config[tag.currentTrl]-1; //Read out the configuration for this trial
	trl.color_data[tag.currentTrl] = newcolor[0]; //Save the color used for this trial
	drawDots(stiPar.ndot,hexIdx,confIdx);
	drawTarget(confIdx);
	if (tag.currentTrl===0) {tag.init_Time = new Date().getTime()}
	timing.stimOn[tag.currentTrl] = new Date().getTime() - tag.init_Time;
	tag.currentBlock = trl.block[tag.currentTrl];
	//text for decision task
	d3.select('#instruction').text('Which group does the black dot belong to?').style('color', '#000000');

	//make buttons for decision task
	makeButton_d('btn1').style('background-color',hexIdx[tag.sortindex[0]]).on("click", function(){saveCategorization(tag.sortindex[0]+1)} );
	makeButton_d('btn2').style('background-color',hexIdx[tag.sortindex[1]]).on("click", function(){saveCategorization(tag.sortindex[1]+1)} );
	makeButton_d('btn3').style('background-color',hexIdx[tag.sortindex[2]]).on("click", function(){saveCategorization(tag.sortindex[2]+1)} );
} else {
	terminateExperiment();
	console.log('Done');
};
}

function saveCategorization(decision){
//save the decision data
trl.decision[tag.currentTrl] = decision;
timing.decision_rt[tag.currentTrl] = new Date().getTime() - tag.init_Time - timing.stimOn[tag.currentTrl];
setTimeout(function() {
	clearButton();
	clearInstruction();
},100);

setTimeout(function() {
	//text for confidence task
	switch (group){
		case 1:
		d3.select('#instruction').text('How confident are you in your decision?').style('color', '#000000');
		makeButton('btn1').style('background-color','#CCCCCC').text('very unconfident').on("click", function(){saveConfidence(1)} );
	  	makeButton('btn2').style('background-color','#CCCCCC').text('somewhat unconfident').on("click", function(){saveConfidence(2)} );
	  	makeButton('btn3').style('background-color','#CCCCCC').text('somewhat confident').on("click", function(){saveConfidence(3)} );
	  	makeButton('btn4').style('background-color','#CCCCCC').text('very confident').on("click", function(){saveConfidence(4)} );
	  	break;
		case 2:
		d3.select('#instruction').text('How high is the probability that your decision was correct?').style('color', '#000000');
		makeButton('btn1').style('background-color','#CCCCCC').text('very low').on("click", function(){saveConfidence(1)} );
	  	makeButton('btn2').style('background-color','#CCCCCC').text('somewhat low').on("click", function(){saveConfidence(2)} );
	  	makeButton('btn3').style('background-color','#CCCCCC').text('somewhat high').on("click", function(){saveConfidence(3)} );
	  	makeButton('btn4').style('background-color','#CCCCCC').text('very high').on("click", function(){saveConfidence(4)} );
	  	break;
		}
	  },400);
}

function saveConfidence(confidence){
//save the confidence data
trl.confidence[tag.currentTrl] = confidence;
timing.confidence_rt[tag.currentTrl] = new Date().getTime() - tag.init_Time - timing.stimOn[tag.currentTrl];
setTimeout(function() {
	clearButton();
	clearInstruction()
	paper.clear();
	tag.currentTrl++;
},100);
setTimeout(function() {
	if (tag.currentTrl >= ntrl){
		doTrial();
	} else {
		if (trl.block[tag.currentTrl] > trl.block[tag.currentTrl-1]) {PresentBlockPause();} //Present frame between block
		else {doTrial();}
	}
},expPar.ITI);
}

function terminateExperiment() {
// Hide things
setTimeout(function() {
	// Assign values to html objects
	//$('#subjName').val(document.getElementById("subjName").value);
	$('#decision').val(trl.decision.join());
	$('#confidence').val(trl.confidence.join());
	$('#config').val(trl.config.join());
	$('#target_x').val(trl.target_x.join(';'));
	$('#target_y').val(trl.target_y.join(';'));
	$('#stimOn').val(timing.stimOn.join());
	$('#color_data').val(trl.color_data.join());
	$('#theta').val(trl.theta.join(';'));
	$('#rt_decision').val(timing.decision_rt.join(';'));
	$('#rt_confidence').val(timing.confidence_rt.join(';'));
	$('#group').val(group);

	$('#canvas').hide();
	d3.select('#instruction').text('All trials done. Click the button to submit').style('color', '#000000');
	$('#submitButton').show();

// 	alert('Thanks for your participation. Your result has been just submitted automatically.');
// 	document.forms[0].submit();
},expPar.delayBfResponse);	// automatic submission: forms[0]: first form, turk automatically forms
}

function PresentBlockPause() {
	var temp = "Good !! " + trl.block[tag.currentTrl-1] + " out of " + nblock + " blocks finished. Click the button to continue.";
	newText(temp);
//newText('Good! X out of X blocks finished. Click to start the next block.');
makeButton('button_continue').text('Click to continue').on("click", function(){
	setTimeout(function() {
		paper.clear();
		clearButton();
		doTrial();
	},expPar.ITI)
})
}

function drawDots(ndot,colorIdx,confIdx){
	/*loop through each dot*/
//ndot: number of dot per group
//colorIdx: color chosen for each category
var Idx1 = math.ones(ndot).toArray();
Idx2 = math.ones(ndot);
Idx3 = math.ones(ndot);
Idx2 = math.add(Idx2,1).toArray();
Idx3 = math.add(Idx3,2).toArray();
catIdx  = shuffle(Idx1.concat(Idx2, Idx3));

//rotate if needed
if(confIdx<4){
	var theta = 0;
} else {
	var theta = Math.random()*2*Math.PI;
	//theta = Math.PI/180*300;
}
trl.theta[tag.currentTrl] = parseFloat(theta).toFixed(3);
var tempx = math.add(math.multiply(ux._data[confIdx],Math.cos(theta)),math.multiply(uy._data[confIdx],-Math.sin(theta)));
var tempy = math.add(math.multiply(ux._data[confIdx],Math.sin(theta)),math.multiply(uy._data[confIdx],Math.cos(theta)));
var temp = tempx;
// circle  = paper.circle(tempx[0]+ center[0], tempy[0]+ center[1], 5);
// circle  = paper.circle(tempx[1]+ center[0], tempy[1]+ center[1], 15);
// circle  = paper.circle(tempx[2]+ center[0], tempy[2]+ center[1], 30);

for (i = 0; i < ndot*3; i++){
	var x   = tempx[catIdx[i]-1] + center[0] + (rnorm(0,1)*sig_x);
	var y   = tempy[catIdx[i]-1] + center[1] + (rnorm(0,1)*sig_y);
	circle  = paper.circle(x, y, stiPar.dotradius);
	circle.attr({
		fill: colorIdx[catIdx[i]-1],
		'stroke-width': 0 
	});
}
tag.sortindex = sortWithIndeces(temp).sortIndices;
}

function drawTarget(confIdx,coord){
	//confIdx = trl.config[tag.currentTrl];
	if (typeof coord === 'undefined') {
		if (confIdx<4) {
			var x=0;
			var y=0;
			switch (confIdx){
				case 0:
				case 1:
				var range = Math.max.apply(Math, ux._data[confIdx]) - Math.min.apply(Math, ux._data[confIdx]);
    	        range = range + 0.25/scr.dppx*2/2; //*x becuase there are two ends, /2 becuase zoom-in in browser
    	        x   = Math.round(center[0] + (Math.random()*range - range*0.5));
    	        y   = Math.round(center[1] + (rnorm(0,1)*sig_y));
    	        break;
    	        case 2:
    	        var range = Math.max.apply(Math, ux._data[confIdx]) - Math.min.apply(Math, ux._data[confIdx]);
    	        range = range + 0.25/scr.dppx*2/2; //*x becuase there are two ends, /2 becuase zoom-in in browser
    	        x   = Math.round(center[0] + (Math.random()*range - range*0.5) - 0.45/scr.dppx/2);
    	        y   = Math.round(center[1] + (rnorm(0,1)*sig_y));
    	        break;
    	        case 3:
    	        var range = Math.max.apply(Math, ux._data[confIdx]) - Math.min.apply(Math, ux._data[confIdx]);
    	        range = range + 0.25/scr.dppx*2/2; //*x becuase there are two ends, /2 becuase zoom-in in browser
    	        x   = Math.round(center[0] + (Math.random()*range - range*0.5) + 0.45/scr.dppx/2);
    	        y   = Math.round(center[1] + (rnorm(0,1)*sig_y));
    	        break;
    }

    } else { //this is for sampling from a circle
    	coor = rand_circ(1,center[0],center[1],92);
    	var x = Math.round(coor[0]);
    	var y = Math.round(coor[1]);
    }

} else {
	var x = coord[0];
	var y = coord[1];
}
if (x > screen_sizex-stiPar.dotradius){x = screen_sizex - stiPar.dotradius}
if (x < stiPar.dotradius){x = stiPar.dotradius}
if (y > screen_sizey-stiPar.dotradius){y = screen_sizey - stiPar.dotradius}
if (y < stiPar.dotradius){y = stiPar.dotradius}

			circle  = paper.circle(x, y, stiPar.targetradius);
			circle.attr({fill: '#000000','stroke-width': 0});
			trl.target_x[tag.currentTrl] = x;
			trl.target_y[tag.currentTrl] = y;

			// draw center of three groups
			// x = Math.round(ux._data[confIdx][0]+center[0]);
			// y = Math.round(uy._data[confIdx][0]+center[1]);
			// circle  = paper.circle(x, y, stiPar.targetradius);
			// circle.attr({fill: '#000000','stroke-width': 0});
			// x = Math.round(ux._data[confIdx][1]+center[0]);
			// y = Math.round(uy._data[confIdx][1]+center[1]);
			// circle  = paper.circle(x, y, stiPar.targetradius);
			// circle.attr({fill: '#000000','stroke-width': 0});
			// x = Math.round(ux._data[confIdx][2]+center[0]);
			// y = Math.round(uy._data[confIdx][2]+center[1]);
			// circle  = paper.circle(x, y, stiPar.targetradius);
			// circle.attr({fill: '#000000','stroke-width': 0});
}

		function pickThreeColor(){
/* Pick three numbers ranging from 0-359, equally spaced with 120 deg apart on color space
/and then return it as hex color */
var colorIdx = new Array;
var hexIdx = new Array;
colorIdx[0] = math.round(math.random()*(360-1));
for ( i=1 ; i<3; i++ ){
	colorIdx[i] = colorIdx[i-1]+120;
	if (colorIdx[i]/359 > 1){
		colorIdx[i] = colorIdx[i]%359-1;
	}
}
for (i=0; i<3; i++){
	var col = [colMat_r[colorIdx[i]],colMat_g[colorIdx[i]],colMat_b[colorIdx[i]]];
	hexIdx[i] = Raphael.rgb(col[0],col[1],col[2]);
}
return [colorIdx, hexIdx];
}

function makeButton_d(id) {
	mybutton = d3.select("#button")
	.insert("button")
	.attr("type","button")
	.attr("class","btn_d btn-primary btn-lg")
	.attr("id",id)
	return mybutton
}

function makeButton(id) {
	mybutton = d3.select("#button")
	.insert("button")
	.attr("type","button")
	.attr("class","btn btn-primary btn-lg")
	.attr("id",id)
	return mybutton
}

function clearButton() {
	d3.select("#button")
	.selectAll("button")
	.remove();
}

function clearInstruction() {
	d3.select("#instruction")
	.style('color', '#FFFFFF');
}

// check browser size and mobile device
function CheckBrowserSize() {
	if(navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/BlackBerry/i)) {
		$('#button_check').hide();
		$('#screensize_msg').hide();
		alert('This task does not support mobile device. Please try with your computer.');
	}
	else {
		scr.window_height = $(window).height();
		scr.window_width  = $(window).width();
		scr.html_height   = $(document).height();
		scr.html_width    = $(document).width();
		if (scr.window_height < 600 || scr.window_width < 800) {
			alert('You are good to go. Thanks. Press the button to continue.');
			$('#checkScreenSize').hide();
			$('#screentest').hide();
			drawCanvas();
			presentInstruction_color();
		}
		else {
			alert('You are good to go. Thanks. Press the button to continue.');
			$('#checkScreenSize').hide();
			$('#screentest').hide();
			drawCanvas();
			presentInstruction_color();
		}
	}
}

// Run experiments
// paper = drawCanvas();

function Start_Exp(){
	$('#welcome').hide();
	$('#submitButton').hide();
//drawCanvas();
presentInstruction_screentest();
}


$(document).ready(function(){
	
var correct = [];
var incorrect = [];
var graveyard = [];

var questions = [{
	question: "The first person shooter video game Doom was first released in what year??",
	choice:["1993","1985","1998","1983"],
	answer: "1993"
},
{
	question: ["Steve Jobs, Steve Wozniak, and Ronald Wayne founded what company in 1976??"],
	choice:["Microsoft","IBM","Apple","Acer"],
	answer: "Apple"
},
{
	question: "In computer science, what does 'GUI' stand for??",
	choice:["Graphical User Interface","GUI User Interface","Gyrotechnical User Interface","Graphic User Interaction"],
	answer: "Graphic User Interface"
},
]

	var self = this;
	var clock = {
		time: 120,
		start: function(){
			
			self.counter = setInterval(clock.count, 1000);

		},
		stop: function(){
			clearInterval(self.counter)
		

		},
		count: function(){
			
			clock.time--;
			var converted = clock.timeConverter(clock.time);
			$("#timer").html("<h2>"+ converted +"</h2>");
			

		},
		timeConverter: function(t){
			var minutes = Math.floor(t/60);
			var seconds = t - (minutes * 60);
			if (seconds < 10){
				seconds = "0" + seconds
			}
			if (minutes === 0){
				minutes = "00";
			}else if (minutes < 10){
				minutes = "0" + minutes;
			}
			return minutes + ":" + seconds
		}

	};
	if (clock.time <= 0){
		displayResults()
	}
$("#startBtn").click(function(){

	$("#submit").html("<button id='submitBtn'><h1 id='answer'>Submit</h1></button>");
	$("#timer").html("<h2>02:00</h2>");
	clock.start()
	renderQuestion();

});
	//start timer function


	


	function renderQuestion(){
	
	var x = Math.floor(Math.random()*questions.length);
	window.x = x;
	$("#question").html("<h2>"+questions[x].question+"</h2>");
	
	for (i = 0; i < 4; i++) {
		var answer = questions[x].choice[i]
		
		var a = $("<input class='answer' type='radio' name='option' id="+answer+"><label>"+answer+"</label>");
		
		
		$("#answer").append(a);

				
	};
	
};



function check(){
		var id = questions[x].answer.split(" ");
		console.log(id[0]);
		if (correct.length + incorrect.length < questions.length){
			if($("#"+id)[0].checked){
				correct.push(questions[x].answer)
			}else{
				incorrect.push(questions[x].answer)
			}
		}else{
			displayResults();
			clock.stop()
		}		
}

function displayResults(){

	$("#timer").html("Great Job!");
	$("#submit").remove()
	$("#question").html("<h2> You got"+" "+correct.length+" "+"answers correct! and you missed"+" "+incorrect.length+ "</h2>");

}
		
		



$("#submit").click(function(){
	
		check()


	$("#answer").empty();
	console.log(correct)
	console.log(incorrect)
	//make sure question is not asked again
	graveyard.push(questions[x])
	var index = questions.indexOf(questions[x])
	if(graveyard.indexOf(questions[x]) > -1){
		questions.splice(index, 1);
	};
	renderQuestion();


});







});
function Question(question, choices, correctAnswer) {
	this.question = question;
	this.choices = choices;
	this.correctAnswer = correctAnswer;
}

var answer;
var score = 0;

var question1 = new Question(
	'How many days in one year?',
	['200', '290', '365'],
	'365'
	);

var question2 = new Question(
	'What is the answer to the ultimate question of life, the universe, and everything?',
	['huh?', '42', 'Zombie Jesus'],
	'42'
	);

var question3 = new Question(
	'How many apples?',
	['one', 'two', 'three'],
	'one'
	);

var qArray = [question1, question2, question3];
var nextCount = 0;

function qCounter() {
	for (var i = 0; i < qArray.length; i++) {
		$('next').on('click')
	}
}


function keepScore() {
  if (answer === qArray[nextCount].correctAnswer) {
    score++;
  } else {
    alert('Wrong!');
  }
}

$(document).ready(function(){
  $('#startbutton').on('click', function(){
    $('#start').hide();
    $('.questions').show();
    $('#score').show();
    $('body ul').html(
    	"<p>" + qArray[nextCount].question + "</p>" +
     	"<li><input type='radio' name='quizQ' value='val1'><label>" + qArray[nextCount].choices[0] + "</label></li>" +
     	"<li><input type='radio' name='quizQ' value='val2'><label>" + qArray[nextCount].choices[1] + "</label></li>" +
     	"<li><input type='radio' name='quizQ' value='val3'><label>" + qArray[nextCount].choices[2] + "</label></li>"
    	);
    $('#score').html(
      '<span><h3>' + score + '</h3></span>'
      );
    $('input').change(function () {
      answer = $('input:checked + label').text();
    });
    keepScore();
    $('#next').on('click', function() {
      if ((nextCount + 1) < qArray.length && $('input').is(':checked')) {
          nextCount++;
    	$('body ul').html(
    	"<p>" + qArray[nextCount].question + "</p>" +
     	"<li><input type='radio' name='quizQ' value='val1'><label>" + qArray[nextCount].choices[0] + "</label></li>" +
     	"<li><input type='radio' name='quizQ' value='val2'><label>" + qArray[nextCount].choices[1] + "</label></li>" +
     	"<li><input type='radio' name='quizQ' value='val3'><label>" + qArray[nextCount].choices[2] + "</label></li>"
    	); 
      $('#score').html(
      '<h3>' + score + '</h3>'
      );
    	} else if ($('input').is(':checked') === false) {
    		alert('You haven\'t answered the question!')
    	} else {
    		$('.questions').hide();
    		$('next').hide();
    		$('body').html('<p>You\'ve reached the end!</p>');
        $('#score').show();
        $('#score').html(
      '<h3>' + score + '</h3>');
    	}
      $('input').change(function () {
      answer = $('input:checked + label').text();
      });
      keepScore();
     });
  	}); 		
  });





function correctAnswer() {
	if ($('input[name=quizQ]:radio').val() === correctAnswer) {
		//add a point to their score
	} else {
		//don't do anything? 
	};
}

function dispQuestion() {
  $('#questionTable thead');
}


/*    if (nextCount < qArray.length && answer != undefined) {
            switch (answer) {
                case 'val1':
                    answer = qArray[(nextCount - 1)].choices[0];
                    break;
                case 'val2':
                    answer = qArray[(nextCount - 1)].choices[1];
                    break;
                case 'val3':
                    answer = qArray[(nextCount - 1)].choices[2];
                    break;
            }  */
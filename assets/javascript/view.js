
window.onload = () => {

	view.welcomeScreen();
	//view.gameOverScreen();

};

let view = {

	welcomeScreen: () => {
		$('.game-area').hide();
		var welcomeHtml =
			"<input type='text' name='playerName' id='playerNameInput' maxlength=16 placeholder='PLAYER NAME'>" +
			"<button id='button-begin-game'>BEGIN GAME</button>";
		$('.welcome-screen').html(welcomeHtml);
		$('#button-begin-game').click(function() {
			playerName = $('#playerNameInput').val().trim();
			if (playerName == "") {
				playerName = "";
			}
			$('.welcome-screen').hide();
			$('.game-area').show();
			game.nextQuestionInRound();
		});

	},

	updateStatBar: () => {
		var statsHtml =
			"<ul>" +
				"<li><p>" + playerName + "</p></li>" +
				"<li><p>$" + score + "</p></li>" +
			"</ul>";
		$('.stats-bar').html(statsHtml);

	},

	displayQuestion: () => {
		$('#category').text(category);
		$('#question').text(question);
		$('#question-value').text("$ "+value);

	},

	displayResponses: () => {
		responseChoices = $('.response-choices');
		for (var j = 0; j < responses.length; j++) {
			response = $('<li>').attr('class', 'userResponse').html(responses[j]);
			responseChoices.append(response);
		}
		game.checkResponse();
	},

	displayTimer: () => {
		$('#timer').text(timer);
		timer = 60;

	},

	dialogCorrectNextQuestion: () => {
		$('#dialog-correct-next-question').html("<p>" + "<br>Correct!<br>Add<br>$" + value + "!</p>")
		$( '#dialog-correct-next-question' ).dialog({
		  classes: {"ui-dialog": "correct"},
		  modal: true,
		  resizable: false,
		  position: { my: "center", at: "center"},
		  dialogClass: "no-close",
		  buttons: [
		    {
		      text: "NEXT QUESTION",
		      click: function() {
		        $( this ).dialog( "close" );
		        view.clearGameArea();
		        game.pushUsedQuestion();
		        game.nextQuestionInRound();
		        counter++;
		      }
		    }
		  ]

   		})
	},

	dialogInCorrectNextQuestion: () => {
		$('#dialog-incorrect-next-question').html("<p>" + "<br>Incorrect!<br>LOSE<br>$" + value + "!</p>" +
													"<p> THE CORRECT ANSWER WAS:<br>" + correct + "<p>")
		$( '#dialog-incorrect-next-question' ).dialog({
		  classes: {"ui-dialog": "incorrect"},
		  modal: true,
		  resizable: false,
		  position: { my: "center", at: "center"},
		  dialogClass: "no-close",
		  buttons: [
		    {
		      text: "NEXT QUESTION",
		      click: function() {
		        $( this ).dialog( "close" );
		        game.pushUsedQuestion();
		        view.clearGameArea();
		        game.nextQuestionInRound();
		        counter++;
		      }
		    }
		  ]

		})
	},

	dialogTimesUpNextQuestion: () => {
		$('#dialog-times-up-next-question').html("<p>"+ "<br>TIME IS UP!<br>LOSE<br>$" + value + "!<p>" +
													"<p> THE CORRECT ANSWER WAS:<br>" + correct + "<p>")
		$( '#dialog-times-up-next-question' ).dialog({
		  classes: {"ui-dialog": "times-up"},
		  modal: true,
		  resizable: false,
		  position: { my: "center", at: "center"},
		  dialogClass: "no-close",
		  buttons: [
		    {
		      text: "NEXT QUESTION",
		      click: function() {
		        $( this ).dialog( "close" );
		        game.pushUsedQuestion();
		        view.clearGameArea();
		        game.nextQuestionInRound();
		        counter++;
		      }
		    }
		  ]

		})
	},

	hideDialogBoxes: () => {
		$('.ui-dialog').hide();
	},

	clearGameArea: function() {
		$('#category').empty();
		$('#question').empty();
		$('#question-value').empty();
		$('.response-choices').empty();
		$('#timer').empty();
	},

	gameOverScreen: () => {
		// $('.ui-dialog').hide();
		// $('.game-area').hide();
		game.timerStop();
		if ( score > 1 ) {
			var gameOverHtml =
			"<h1>Congratulations " + playerName + "!<br>Score: <br>$" + score + "</h1>" +
			"<h1>Would You like to play Again?</h1>" +
			"<button id='button-restart-game'>NEW GAME</button>";
		} else if ( score <= 0 ) {
			var gameOverHtml =
			"<h1>I'm Sorry " + playerName + "!<br>You Finished the Game with a score of <br>$" + score + "</h1>" +
			"<h1>Play again?</h1>" +
			"<button id='button-restart-game'>NEW GAME</button>";
		}
		$('.restart-screen').html(gameOverHtml);
		$('#button-restart-game').click(function() {
		 	$('.restart-screen').hide();
			counter = 0;
		 	score = 0;
	        playerName = "";
			view.updateStatBar();
			game.clearArrays();
			$('.welcome-screen').show();
			view.welcomeScreen();

		 });

	},

};

var name = "";
var course = "";
var questionNumber = 0;
var totleMode = 18;//total num container
var decision = 3;

var paragraph = "On 2019 Halloween day, ";

function gameStart(mode) {
	switch (mode) {
		case 1:
			for (var i = 1; i < totleMode + 1; i++) {
				var text = "container" + i;
				document.getElementById(text).style.display = "none";
			}
			document.getElementById("container2").style.display = "flex";
			break;

		case 2: // name
			questionNumber = 1;
			for (var i = 1; i < totleMode + 1; i++) {
				var text = "container" + i;
				document.getElementById(text).style.display = "none";
			}
			document.getElementById("container3").style.display = "flex";

			name = document.getElementById("name").value;
			changeName(name, questionNumber);
			break;

		case 3: // walk to strange noise
			for (var i = 1; i < totleMode + 1; i++) {
				var text = "container" + i;
				document.getElementById(text).style.display = "none";
			}
			document.getElementById("container4").style.display = "flex";
			if (decision == 3) {
				paragraph += name + " hears a strange noise and walks towards it.";
			}
			break;

		case 4: // see your friend
			for (var i = 1; i < totleMode + 1; i++) {
				var text = "container" + i;
				document.getElementById(text).style.display = "none";
			}
			document.getElementById("container5").style.display = "flex";
			paragraph += " The sound dies, and " + name + " sees a black cat dashes in front of " + name + " really quickly and immediately vanishes. " + name + " thinks that " + name + " is so tired from Spookathon and " + name + " got an illusion. " + name + " turns around and " + name + " gets shocked because " + name + " sees a friend. ";
			break;

		case 5: // go
			for (var i = 1; i < totleMode + 1; i++) {
				var text = "container" + i;
				document.getElementById(text).style.display = "none";
			}
			document.getElementById("container6").style.display = "flex";
			paragraph += name + " agrees to go to a friend's house. "
			break;

		case 6: //play video game
			for (var i = 1; i < totleMode + 1; i++) {
				var text = "container" + i;
				document.getElementById(text).style.display = "none";
			}
			document.getElementById("container7").style.display = "flex";
			paragraph += name + " has a nice time playing a ghost game with " + name + "'s friend until midnight then " + name + " excuses and goes back home. Tomorrow " + name + " receives a security email from Uvic warning every student to be careful as there is a student, who " + name + " was hanging out with until very late at night, got hit by a car and was sent to the hospital last evening.";
			break;

		case 7: // deny to hang out, and go home
			for (var i = 1; i < totleMode + 1; i++) {
				var text = "container" + i;
				document.getElementById(text).style.display = "none";
			}
			document.getElementById("container8").style.display = "flex";
			paragraph += name + "'s friend invites " + name + " to come to his house, but " + name + " denies. "
			paragraph += name + " is so tired that " + name + " decides to catch a cab home. " + name + " gets in the cab and feels awkward as it is so silent until the bus driver asks " + name + " “Do you feel comfortable with my service?” " + name + " replies “it is great to keep a good manner.” He then replies “well, today is my first day on this job. I usually drive a hearse.";
			break;

		case 8:
			for (var i = 1; i < totleMode + 1; i++) {
				var text = "container" + i;
				document.getElementById(text).style.display = "none";
			}
			document.getElementById("container10").style.display = "flex";
			paragraph += " The sound dies, and " + name + " sees a black cat dashes in front of " + name + " really quickly and immediately vanishes. " + name + " thinks that " + name + " is so tired from Spookathon and " + name + " got an illusion. " + name + " turns around and " + name + " gets shocked because " + name + " sees a piece of paper on the ground. ";
			break;

		case 9:
			for (var i = 1; i < totleMode + 1; i++) {
				var text = "container" + i;
				document.getElementById(text).style.display = "none";
			}
			document.getElementById("container10").style.display = "flex";
			break;

		case 10: //course you like
			questionNumber = 2;
			for (var i = 1; i < totleMode + 1; i++) {
				var text = "container" + i;
				document.getElementById(text).style.display = "none";
			}
			document.getElementById("container12").style.display = "flex";

			course = document.getElementById("exam").value;
			changeName(course, questionNumber);
			paragraph += name + " pickes it up and see an F on " + name + "'s " + course + " exam. ";
			paragraph = paragraph + name + " is so shocked that " + name + " wakes up.";
			break;

		case 11:
			for (var i = 1; i < totleMode + 1; i++) {
				var text = "container" + i;
				document.getElementById(text).style.display = "none";
			}
			document.getElementById("container12").style.display = "flex";
			break;

		case 12: // ignore and walk home
			for (var i = 1; i < totleMode + 1; i++) {
				var text = "container" + i;
				document.getElementById(text).style.display = "none";
			}
			document.getElementById("container13").style.display = "flex";
			paragraph += name;
			paragraph += " hears a strange noise but ignores and walks home. The sound gets louder and gets closer to " + name + ". ";
			paragraph += name + " suddenly turns back and tries to find where the sound comes from. ";
			decision = 12;
			break;

		case 13: // go to restroom
			for (var i = 1; i < totleMode + 1; i++) {
				var text = "container" + i;
				document.getElementById(text).style.display = "none";
			}
			document.getElementById("container14").style.display = "flex";
			paragraph += "When " + name + " arrives to a friend's house, " + name + " wants to go to the washroom. ";
			break;

		case 14:
			for (var i = 1; i < totleMode + 1; i++) {
				var text = "container" + i;
				document.getElementById(text).style.display = "none";
			}
			document.getElementById("container15").style.display = "flex";
			paragraph += "While washing hands,the light suddenly turns off. ";
			paragraph += name;
			paragraph += " uses the flashlight from the phone. ";
			break;

		case 15:
			for (var i = 1; i < totleMode + 1; i++) {
				var text = "container" + i;
				document.getElementById(text).style.display = "none";
			}
			document.getElementById("container16").style.display = "flex";
			paragraph += name + " sees something like a shadow of man in the bathroom mirror. " + name + " immediately runs away from the friend’s house without saying any words.";
			paragraph += "Tomorrow " + name + " receives a security email from uvic warning every student to be careful as there is a student who is your friend that " + name + " were hanging out with until very late at night got hit by a car and being sent to the hospital last evening.";
			break;

		case 16:
			for (var i = 1; i < totleMode + 1; i++) {
				var text = "container" + i;
				document.getElementById(text).style.display = "none";
			}
			document.getElementById("container17").style.display = "flex";
			paragraph += "While washing your hand,the light suddenly turns off. ";
			paragraph += name;
			paragraph += " walks out to ask your friend about the light. ";
			paragraph += name + "'s friend said he had no idea and suggest that they should go to an electric room. When " + name + " and the friend arrives in that room the light mysteriously turns on and " + name + " realizes that " + name + "'s friend disappears and " + name + " is the only one in the house.";
			break;

		case 17:
			for (var i = 1; i < totleMode + 1; i++) {
				var text = "container" + i;
				document.getElementById(text).style.display = "none";
			}
			document.getElementById("container18").style.display = "flex";
			document.getElementById("finalText").innerHTML = paragraph;

			document.getElementById("speech-msg").value = paragraph;

	}//switch
}//gameStart

function changeName(name, number) {
	switch (number) {
		case 1:
			document.getElementById("player").innerHTML = name;
			break;

		case 2:
			document.getElementById("examName").innerHTML = course;
			break;
	}//switch
}//changeName

function returnparagraph() {
	// var finalText = paragraph;
	document.getElementById("finalText").innerHTML = paragraph;
	end();
}

function end() {
	document.getElementById("speak").style.display = "none";
	document.getElementById("speech-msg").value = paragraph;
}


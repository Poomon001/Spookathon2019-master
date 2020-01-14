//change mode 
//control display in css
//just add more if statement


function gameStart(mode){
	var nameValue = "";
	if(mode == 1){
	document.getElementById("container1").style.display = "none";
	document.getElementById("container2").style.display = "flex";/*flex*/
	document.getElementById("container3").style.display = "none";
	} if(mode == 2){
	document.getElementById("container2").style.display = "none";
	document.getElementById("container1").style.display = "none";/*flex*/
	document.getElementById("container3").style.display = "flex";

	}if(mode == 3){
	document.getElementById("container2").style.display = "none";
	document.getElementById("container1").style.display = "none";
	document.getElementById("container3").style.display = "flex";
	
	}
	
}//gameStart


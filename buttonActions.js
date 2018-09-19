function toggle(){
	document.getElementById("intro").style.visibility = "hidden";
	document.getElementById("channel").style.visibility = "visible";
}
function addClass(someID){
	if(document.querySelector('.selected'))
    document.querySelector('.selected').classList.remove("selected");
	document.getElementById(someID).className += " selected";
}
function toggleStream(){
	var x = document.getElementsByClassName("shapeshifter play");
    x[0].style.visibility = "hidden";
	document.getElementById("captions").style.visibility = "visible";
}
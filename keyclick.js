document.addEventListener("keydown", function(event){
	//the 's' key
    if (event.keyCode == 83) {
    	moveGunDown();
    } // up arrow key
    else if (event.keyCode == 38) {
	   	moveGunUp();
    } // the 'w' key
    else if (event.keyCode == 87) {
	   	moveGunUp();
    } // down arrow key 
    else if (event.keyCode == 40){
    	moveGunDown();
    } // space bar
    else if (event.keyCode == 32){

    }
});

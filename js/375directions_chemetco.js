//directionButton control
$(document).ready(function(){
	var directionsPanelIn = true;
	$(".directionButton").click(function(){
		if (directionsPanelIn == true){
			$("#directionsPanel").animate({left: '40px'}, 500); //1st variable indicate height or width; 2nd variable indicates time in millis
			$(".directionButton #directionClose1").css({transform: 'rotate(-60deg)'}, 2000);
			$(".directionButton #directionClose2").css({transform: 'rotate(60deg)'}, 2000);
			directionsPanelIn = false;
		}
		else{
			$("#directionsPanel").animate({left: '-290px'}, 500); //1st variable indicate height or width; 2nd variable indicates time in millis
			$(".directionButton #directionClose1").css({transform: 'rotate(60deg)'}, 2000);
			$(".directionButton #directionClose2").css({transform: 'rotate(-60deg)'}, 2000);
			directionsPanelIn = true;
		}
	});
});

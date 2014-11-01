var pieces = [];

window.onload = function(){

	var xpos = -100;
	var ypos = 0;
	var i = 1;

	while (i < 17){
		pieces[i-1] = document.getElementsByTagName("DIV")[i];
		pieces[i-1].className += "puzzlepiece";
		pieces[i-1].style.backgroundPosition = (-1 *xpos)+'px' + ' ' + (-1 *ypos)+ 'px';

		//added for testing functions

		//pieces[i-1].addEventListener("click", canMove);
		pieces[i-1].addEventListener("click", changeColor);
		pieces[i-1].addEventListener("mouseover", highlight);
		pieces[i-1].addEventListener("mouseout", unhighlight);
		
		//

		pieces[0].style.left = '0px';
		pieces[0].style.backgroundPosition = '0px 0px';

	  	if (i > 0 && i < 18){
			pieces[i-1].style.left = xpos + 'px';
			pieces[i-1].style.top = ypos + 'px';

			if (xpos >= 300){
				ypos += 100;
				xpos = 0;
			}
				
			else{
				xpos += 100;
			}
		}

		i++;
	}
	//pieces.click = moveDown(this);
};

//Moving puzzle pieces
var moveDown = function(){

	down = 100;
	plus = parseInt(event.target.style.top);
	event.target.style.top = plus + down +'px';
}

var moveUp = function(piece){

	up = 100;
	plus = parseInt(piece.style.top);
	piece.style.top = plus - up +'px';
}

var moveLeft = function(piece){

	left = 100;
	plus = parseInt(piece.style.left);
	piece.style.left = plus - left +'px';
}

var moveRight = function(piece){

	right = 100;
	plus = parseInt(piece.style.left);
	piece.style.left = plus + right +'px';
}
//End of moving puzzle pieces

//Is used with canMove
var highlight = function(){
	event.target.style.borderColor = "red";
}

var unhighlight = function(){

	event.target.style.borderColor = "black";
}

//checking if a piece can move
/*var canMove = function(){
	sides = 0;
	}
}*/


//Functions used to test
function changeColor() {
event.target.style.color = "red";
}

function changeColor2() {
event.target.style.color = "blue";
}

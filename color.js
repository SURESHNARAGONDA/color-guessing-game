var numcolors=6;
var colors =genrancolor(numcolors);
var square = document.querySelectorAll(".square");
var picked = pickcolor()+" none repeat scroll 0% 0%";
var picked1 =pickcolor(); 
var colordisplay=document.getElementById("colordisplay");
var message=document.getElementById("message");
var h1=document.querySelector("h1");
var reset =document.querySelector("#reset");
var easy =document.querySelector("#easy");
var hard =document.querySelector("#Hard");
//mode selection easy or hard.
easy.addEventListener("click",function(){
	hard.classList.remove("select");
	easy.classList.add("select");
	//generate 3 colors
	numcolors=3;
	colors =genrancolor(numcolors);
	//picking a color.
	picked1 =pickcolor(); 
	picked = pickcolor()+" none repeat scroll 0% 0%";
	colordisplay.textContent = picked1;
	//hide bottom three squares using .style.display="none"
	for(var i=0;i<square.length;i++){
		if(colors[i]){
			square[i].style.background =colors[i];
		}
		else{
			square[i].style.display ="none";
		}
	}

});
hard.addEventListener("click",function(){
	easy.classList.remove("select");
	hard.classList.add("select");
	numcolors=6;
	colors =genrancolor(numcolors);
	//picking a color.
	picked1 =pickcolor(); 
	picked = pickcolor()+" none repeat scroll 0% 0%";
	colordisplay.textContent = picked1;
	//hide bottom three squares using .style.display="none"
	for(var i=0;i<square.length;i++){
			square[i].style.background =colors[i];
			square[i].style.display ="block";
	}

});
//reset the game
reset.addEventListener("click",function(){
	colors =genrancolor(numcolors);
	picked1 =pickcolor(); 
	picked = pickcolor()+" none repeat scroll 0% 0%";
	colordisplay.textContent = picked1;
	message.textContent="";
	reset.textContent="New Colors"
	for(var i=0;i<square.length;i++){
		square[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";

});
colordisplay.textContent = picked1;
for(var i=0;i<square.length;i++){
	square[i].style.background = colors[i];
	square[i].addEventListener("click",function(){
		var clicked = this.style.background; 
		if(clicked === picked){
			message.textContent="Correct";
			reset.textContent="Play Again?";
			changecolors(clicked);
			h1.style.background = clicked;
		} else {
			this.style.background = "#232323"
			message.textContent="Try Again";
		}
	});

}
//changing the colors of all squares when correct one is cicked
function changecolors(color){
	for(var i=0; i<square.length;i++){
		square[i].style.background = color;
	}
 }
 	//pick a random one from colos list
function pickcolor(){
	//math.random()gives value bw 0to1;if we multiple with length and apply math it gives numerical value
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}
//generate the random colors..
function genrancolor(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomcolor());
	}
	return arr;
}
function randomcolor(){
	///it will pick random numbers from 0 t0 255;
	var red = Math.floor(Math.random()*256);
	var green = Math.floor(Math.random()*256);
	var blue = Math.floor(Math.random()*256);
	return "rgb("+red+", " + green + ", " + blue +")";
}
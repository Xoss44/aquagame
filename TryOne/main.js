// JavaScript Document
var canvas = document.getElementById("mainGame");
var ctx = canvas.getContext("2d");

ctx.fillRect(0, 0, canvas.width, canvas.height);

//classes
function Board(img) {
	this.x = 0;
	this.y = 0;
	this.width = canvas.width;
	this.height = canvas.height;
	this.img = new Image();
	this.img.src = img;
	this.score = 0;
	//this.music = new Audio();
	//this.music.src = ""
	
	//llama al metodo draw cuando la imagen ya cargó
	this.img.onload = function() {
		this.draw();
	}.bind(this);
	
	this.move = function() {
		this.x--;
		if(this.x < -canvas.width) {
			this.x = 0;
		}
	};
	
	//metodo principal
	this.draw = function() {
		this.move();
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
		ctx.drawImage(this.img, this.x + canvas.width, this.y, this.width, this.height);
	};
}//end of board

//SwimmingBoy
function SwimmingBoy() {
	this.x = 50;
	this.y = 105;
	this.width = 150;
	this.height = 120;
	this.img = new Image();
	this.img.src = "assets/NADADORAZUL.png";


	this.img.onload = function() {
		this.draw();
	}.bind(this);

	this.draw = function() {
		//this.y += 1;
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
		//esto es una validacion
		if(this.y < 0) {
			//gameOver();
			//alert("toco arriba");
			this.y = 12;
		}else if(this.y > canvas.height - this.height) {
			//alert("toco abajo");
			this.y = canvas.height - this.height - 40;
		}
	};
	this.move =function() {
		this.y -= 109;
	};
	this.moveDown = function() {
		this.y += 109;
	};	
}


//declaraciones
var board = new Board("assets/piscinalateral.png");
var boardF = new Board("assets/piscinasf.jpg");
var swimmingBoy = new SwimmingBoy();

var intervalo;
var frames = 0; //cuantas veces se ejecuta

//auxiliar functions
function gameOver() {
	stop();
	ctx.font = "120px courier";
	ctx.strokeStyle = "orange";
	ctx.lineWidth = 8;
	ctx.strokeText("Game Over", 50, 200);
	ctx.font = "50px Avenir";
	ctx.fillStyle = "black";
	ctx.fillText("Press R to start", 50, 300);
}

//main function
//el encargado de que todos se mueva es la funcion update alimentado por un intervalo
function update() {
	frames++;
	//console.log(frames);
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	board.draw();
	swimmingBoy.draw();
	
}
function start() {
	if(intervalo > 0) return
	//se pueden poner extras que se tengan que reiniciar al principio
	intervalo = setInterval(function(){
		update();
	}, 1000/60);
	swimmingBoy.y = 120;
	frames = 0;
	//board.music.play();
	
	
}

function stop() {
	clearInterval(intervalo);
	intervalo = 0;
	//board.music.pause();
}

//listeners (escuchadores/ observadores)
addEventListener("keydown", function(e) {
	if(e.keyCode === 38) {
		swimmingBoy.move();
	}
	if(e.keyCode === 40) {
		swimmingBoy.moveDown();
	}	
	if(e.keyCode === 82) {
		start();
	}
});
// JavaScript Document
// Codigo "limpio"
var canvas = document.getElementById("mainGame");
var ctx = canvas.getContext("2d");  //ctx.fillRect(0, 0, canvas.width, canvas.height);

var boardF = new BoardF();
var swimmingBoyF = new SwimmingBoyF();
var shark = new Shark();
var crock = new Crock();
var beachBall = new Beachball();
var rubberDock = new Rubberdoc();

var shoot = new Shoot(swimmingBoyF.x,swimmingBoyF.y);
var planets =[shark, crock];
var bullets = [];


//classes
function BoardF() {
	this.x = 0;
	this.y = 0;
	this.width = canvas.width;
	this.height = canvas.height;
	this.img = new Image();
	this.img.src = "assets/piscinalateral.png";
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
}//end of boardf


//SwimmingBoyF
function SwimmingBoyF() {
	this.x = 50;
	this.y = Math.floor(Math.random() * 380)+120;
	this.width = 150;
	this.height = 70;
	this.img = new Image();
	this.img.src = "assets/NADADORROJO.png";


	this.img.onload = function() {
		this.draw();
	}.bind(this);

	this.draw = function() {
		this.y += 1;
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
		//esto es una validacion
		if(this.y < 0 || this.y > canvas.height - this.height) {
			gameOver();
					}
	};
	this.move =function() {
		this.y -= 30;
	};
	this.isTouching = function(planet){
		return(this.x < planet.x + planet.width) && (this.x + this.width > planet.x) && (this.y < planet.y + planet.height) && (this.y + this.height > planet.y);
	};

}



function Shoot(x,y){
  this.x = x; 
  this.y = y;
  this.width = 20;
  this.height = 20;
  this.move = false;
  this.img = new Image();
  this.img.src = "assets/burbujas.png";
    this.img.onload = function(){
      this.draw();
    }.bind(this);
  
    this.draw = function(){
      if(this.move) this.x += 5;
      ctx.drawImage(this.img,this.x + 55,this.y + 5,this.width,this.height);
    };
    this.moveUp = function(){
       this.y -= 20; 
    };
    this.moveDown = function(){
      this.y += 20;
    };
    this.moveLeft = function(){
      this.x -= 10;
    };
    this.moveRight = function(){
      this.x += 10;
    };
  this.isTouching = function(planet){
    return(this.x < planet.x + planet.width) && (this.x + this.width > planet.x) && (this.y < planet.y + planet.height) && (this.y + this.height > planet.y);
  };
}

function createShoots(){
  bullets.push(new Shoot(swimmingBoyF.x,swimmingBoyF.y));  
  }


//objects
function Shark() {
	this.x = canvas.width + 80; //+ widthRandom
	this.y = 150;
	this.width = 70;
	this.height = 59;
	this.num = 3;
	this.img = new Image();
		this.img.src = "assets/tiburon.png";
		this.img.onload = function() {
			this.draw();
		}.bind(this);
	this.move = function() {
		this.x -= 3;
	};
	this.draw = function() {
		this.move();
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
		//pinta los numeros
		if(this.x < 0) {
			var randomX = Math.floor(Math.random() * 800);
			var randomY = Math.floor(Math.random() * 380)+120;
			this.x = canvas.width + randomX;
			this.y = randomY;
		}
	this.redraw = function(){
		var randomX = Math.floor(Math.random() * 800);
		var randomY = Math.floor(Math.random() * 380)+120;
		this.x = canvas.width + randomX;
		this.y = randomY;
	};
	};
}

function Crock() {
	this.x = canvas.width; //+ widthRandom
	this.y = 300;
	this.width = 75;
	this.height = 55;
	this.num = 3;
	this.img = new Image();
		this.img.src = "assets/cocodrilo.png";
		this.img.onload = function() {
			this.draw();
		}.bind(this);
	this.move = function() {
		this.x -= 2.5;
	};
	this.draw = function() {
		this.move();
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
		//pinta los numeros
		if(this.x < 0) {
			var randomX = Math.floor(Math.random() * 800);
			var randomY = Math.floor(Math.random() * 380)+120;
			this.x = canvas.width + randomX;
			this.y = randomY;
		}
	this.redraw = function(){
		var randomX = Math.floor(Math.random() * 800);
		var randomY = Math.floor(Math.random() * 380)+120;
		this.x = canvas.width + randomX;
		this.y = randomY;
	};
	};
}

function Beachball() {
	this.x = canvas.width + 40; //+ widthRandom
	this.y = Math.floor(Math.random() * 380)+120;
	this.width = 59;
	this.height = 59;
	this.num = 1;
	this.img = new Image();
		this.img.src = "assets/pelota.png";
		this.img.onload = function() {
			this.draw();
		}.bind(this);
	this.move = function() {
		this.x -= 1.5;
	};
	this.draw = function() {
		this.move();
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
		//pinta los numeros
		if(this.x < 0) {
			var randomX = Math.floor(Math.random() * 800);
			var randomY = Math.floor(Math.random() * 380)+120;
			this.x = canvas.width + randomX;
			this.y = randomY;
		}
	this.redraw = function(){
		var randomX = Math.floor(Math.random() * 800);
		var randomY = Math.floor(Math.random() * 380)+120;
		this.x = canvas.width + randomX;
		this.y = randomY;
	};
	};
}

function Rubberdoc() {
	this.x = canvas.width + Math.floor(Math.random() * 120);; //+ widthRandom
	this.y = Math.floor(Math.random() * 380)+120;
	this.width = 59;
	this.height = 59;
	this.num = 1;
	this.img = new Image();
		this.img.src = "assets/patohule.png";
		this.img.onload = function() {
			this.draw();
		}.bind(this);
	this.move = function() {
		this.x -= 2;
	};
	this.draw = function() {
		this.move();
		ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
		//pinta los numeros
		if(this.x < 0) {
			var randomX = Math.floor(Math.random() * 800);
			var randomY = Math.floor(Math.random() * 380)+120;
			this.x = canvas.width + randomX;
			this.y = randomY;
		}
	this.redraw = function(){
		var randomX = Math.floor(Math.random() * 800);
		var randomY = Math.floor(Math.random() * 380)+120;
		this.x = canvas.width + randomX;
		this.y = randomY;
	};
	};
}


//declaraciones
var intervaloF;
var framesF = 0; //cuantas veces se ejecuta

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
function updateF() {
	framesF++;
	//console.log("Update F");
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	boardF.draw();
	swimmingBoyF.draw();
	shark.draw();
	crock.draw();
	beachBall.draw();
	rubberDock.draw();
	bullets.forEach((bullet, indexB) => {
    bullet.draw();
    //console.log(planets);
    planets.forEach((planet, indexP) => {
      if(bullet.isTouching(planet)){
        bullets.splice(indexB,1);
        //console.log("Impacto");
        planets[indexP].num--;
        if (planets[indexP].num<=0){
          planets[indexP].redraw();
          boardF.score+=1;
        }
      }
      if(swimmingBoyF.isTouching(planet)){
        //bullets.splice(indexB,1);
        console.log("its good");
        //planets[indexP].num--;
        if(planets[indexP].num<=0){
          planets[indexP].redraw();
          boardF.score+=1;
        }
      }
		
    });
    bullet.move = true;
  });
}

function startF() {
	if(intervaloF > 0) return
	//se pueden poner extras que se tengan que reiniciar al principio
	intervaloF = setInterval(function(){
		updateF();
	}, 1000/60);
	swimmingBoyF.y = 120;
	framesF = 0;
	//board.music.play();
}

function stop() {
	clearInterval(intervaloF);
	intervaloF = 0;
	//board.music.pause();
}

//listeners (escuchadores/ observadores)
addEventListener("keydown", function(e) {
	if(e.keyCode === 32) {
		swimmingBoyF.move();
	}
	if(e.keyCode === 82) { // presionas r
		startF();
	}
	if(e.keyCode === 13){
    createShoots();
   }
});
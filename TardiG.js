//javascript document
var canvas = document.getElementById("game-board");
var ctx = canvas.getContext("2d");
var widthRandom = Math.floor(Math.random() * 1000);
var intervalo;
var board = new Board();
var tardi = new Tardigrado();
var shoot = new Shoot(tardi.x,tardi.y);
var mercurio = new Mercurio();
var tierra = new Tierra();
var marte = new Marte();
var venus = new Venus();
var neptuno = new Neptuno();
var planets =[mercurio, tierra, marte, venus, neptuno]
var bullets = [];
var star = new Star1();
var star2 = new Star2();
var star3 = new Star3();
var star4 = new Star4();
var frames = 0;
var numRandom = Math.floor(Math.random() * 13);
var randomXx = Math.floor(Math.random() * 800 );
var stars =[star,star2,star3,star4];
var music2 = board.music;

function Board() {
  this.x = 0;
  this.y = 0;
  this.width= canvas.width;
  this.height= canvas.height;
  this.img = new Image();
  this.img.src = "images/cosmos-universo-estrellas.jpg";
  this.scorePlanets = 0;
  this.scoreStars = 0;
  this.time = 60;
  this.music = new Audio();
  this.music.src = "tardigame.mp3";

  this.img.onload = function(){
    this.draw();
    }.bind(this);

  this.move = function(){
      this.x -= 3;
      if (this.x < -canvas.width) this.x = 0;
    }


  this.draw = function(){
      this.move();
      ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
      ctx.drawImage(this.img,this.x + canvas.width ,this.y,this.width,this.height);
    }
  
  this.drawScorePlanets = function(){
    ctx.font = "25px Avenir"
    ctx.fillStyle = "yellow"
    ctx.fillText("Planets: " + this.scorePlanets,900,560);
  }
  this.drawScoreStars = function(){
    ctx.font = "25px Avenir"
    ctx.fillStyle = "yellow"
    ctx.fillText("Stars: " + this.scoreStars ,900,590);
  }
  this.drawTime = function(){
     if(frames % 60 === 0 && this.time >= 1 ) this.time--;
    ctx.font = "50px Avenir"
    ctx.fillStyle = "yellow"
    ctx.fillText(this.time,1100,585);
  }

  
}

function Tardigrado(){

  this.x = 40;
  this.y = 350;
  this.width = 100;
  this.height = 80;
  this.move = false;
  this.img = new Image();
  this.img.src = "images/tardigradopro.png";

    this.img.onload = function(){
      this.draw();
    }.bind(this);
  
this.draw = function(){
      ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    }

  this.moveUp = function(){
    this.y -= 20; 
  }
  this.moveDown = function(){
    this.y += 20;
  }
  this.moveLeft = function(){
    
    this.x -= 10;
  }
  this.moveRight = function(){
    this.x += 10;
  }
  this.isTouching = function(star){
    return(this.x < star.x + star.width) && (this.x + this.width > star.x) && (this.y < star.y + star.height) && (this.y + this.height > star.y);
  }
}

function Shoot(x,y){
  this.x = x; 
  this.y = y;
  this.width = 20;
  this.height = 20;
  this.move = false;
  this.img = new Image();
  this.img.src = "images/bola de fuego.png";
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

//function generateShoots(){
 // var shoot1 = shoot();
 // var shoot2 = shoot();
  //arrayShoots.push(shoot1);
  //arrayShoots.push(shoot2);
//}
function createShoots(){
  bullets.push(new Shoot(tardi.x,tardi.y));  
  }



function Mercurio(){
  this.x = canvas.width + widthRandom;
  this.y = 200;
  this.width = 100;
  this.height = 100;
  this.num = Math.floor(Math.random() * 6 + 3 );
  this.img = new Image();
    this.img.src = "images/mercurio.png";
    this.img.onload = function(){
      this.draw();
    }.bind(this);
  this.move = function(){
    this.x -= 1.6;
  }
  this.draw = function(){
    this.move();
    ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    ctx.font = "30px Avenir"
    ctx.fillStyle = "white"
    ctx.fillText(this.num,this.x + 40,this.y + 60);
    if(this.x < 0){
      //random + algo
      var randomX = Math.floor(Math.random() * 800 );
      var randomY = Math.floor(Math.random() * 450 )
      this.x = canvas.width + randomX;
      this.y = randomY;
      
    }
    this.redraw = function(){
      //random + algo
      var randomX = Math.floor(Math.random() * 800 );
      var randomY = Math.floor(Math.random() * 300 )
      this.x = canvas.width + randomX;
      this.y = randomY;
      this.num = Math.floor(Math.random() * 6 + 3 );
    }
  }
  }

function Tierra(){
  this.x = canvas.width + widthRandom;
  this.y = 300;
  this.width = 100;
  this.height = 100;
  this.num = Math.floor(Math.random() * 6 + 3 );
  this.img = new Image();
    this.img.src = "images/tierra.png";
    this.img.onload = function(){
      this.draw();
    }.bind(this);
  this.move = function(){
    this.x -= 1;
  }
  this.draw = function(){
    this.move();
    ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    ctx.font = "30px Avenir"
    ctx.fillStyle = "white"
    ctx.fillText(this.num,this.x + 40,this.y + 60);
    if(this.x < 0){
      //random + algo
      var randomX = Math.floor(Math.random() * 800 );
      var randomY = Math.floor(Math.random() * 500 )
      this.x = canvas.width + randomX;
      this.y = randomY;
      
    }
    this.redraw = function(){
      //random + algo
      var randomX = Math.floor(Math.random() * 800 );
      var randomY = Math.floor(Math.random() * 300 )
      this.x = canvas.width + randomX;
      this.y = randomY;
      this.num = Math.floor(Math.random() * 6 + 3 );
    }
  }
  }

function Marte(){
  this.x = canvas.width + widthRandom;
  this.y = 100;
  this.width = 100;
  this.height = 100;
  this.num = Math.floor(Math.random() * 6 + 3 );
  this.img = new Image();
    this.img.src = "images/marte.png";
    this.img.onload = function(){
      this.draw();
    }.bind(this);
  this.move = function(){
    this.x -= 1.4;
  }
  this.draw = function(){
    this.move();
    ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    ctx.font = "30px Avenir"
    ctx.fillStyle = "white"
    ctx.fillText(this.num,this.x + 40,this.y + 60);
    if(this.x < 0){
      //random + algo
      var randomX = Math.floor(Math.random() * 800 );
      var randomY = Math.floor(Math.random() * 380 )
      this.x = canvas.width + randomX;
      this.y = randomY;
      
    }
    this.redraw = function(){
      //random + algo
      var randomX = Math.floor(Math.random() * 800 );
      var randomY = Math.floor(Math.random() * 300 )
      this.x = canvas.width + randomX;
      this.y = randomY;
      this.num = Math.floor(Math.random() * 6 + 3 );
    }
  }
  }

function Venus(){
  this.x = canvas.width + 20;
  this.y = 400;
  this.width = 100;
  this.height = 100;
  this.num = Math.floor(Math.random() * 6 + 3 );
  this.img = new Image();
    this.img.src = "images/venus.png";
    this.img.onload = function(){
      this.draw();
    }.bind(this);
  this.move = function(){
    this.x -= 1.5;
  }
  this.draw = function(){
    this.move();
    ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    ctx.font = "30px Avenir"
    ctx.fillStyle = "white"
    ctx.fillText(this.num,this.x + 40,this.y + 60);
    if(this.x < 0){
      //random + algo
      var randomX = Math.floor(Math.random() * 800 );
      var randomY = Math.floor(Math.random() * 500 )
      this.x = canvas.width + randomX;
      this.y = randomY;
      
    }
    this.redraw = function(){
      //random + algo
      var randomX = Math.floor(Math.random() * 800 );
      var randomY = Math.floor(Math.random() * 300 )
      this.x = canvas.width + randomX;
      this.y = randomY;
      this.num = Math.floor(Math.random() * 6 + 3 );
    }
  }
  }

function Neptuno(){
  this.x = canvas.width + 1;
  this.y = 500;
  this.width = 100;
  this.height = 100;
  this.num = Math.floor(Math.random() * 6 + 3 );
  this.img = new Image();
    this.img.src = "images/neptuno.png";
    this.img.onload = function(){
      this.draw();
    }.bind(this);
  this.move = function(){
    this.x -= 1.3;
  }
  this.draw = function(){
    this.move();
    ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    ctx.font = "30px Avenir"
    ctx.fillStyle = "white"
    ctx.fillText(this.num,this.x + 40,this.y + 60);
    if(this.x < 0){
      //random + algo
      var randomX = Math.floor(Math.random() * 800 );
      var randomY = Math.floor(Math.random() * 600 )
      this.x = canvas.width + randomX;
      this.y = randomY;
      
    }
    
  this.redraw = function(){
      //random + algo
      var randomX = Math.floor(Math.random() * 800 );
      var randomY = Math.floor(Math.random() * 300 )
      this.x = canvas.width + randomX;
      this.y = randomY;
      this.num = Math.floor(Math.random() * 6 + 3 );
    } 
  }
}






function Star1(){
  this.x = canvas.width + 1;
  this.y = 400;
  this.width = 25;
  this.height = 25;
  this.img = new Image();
    this.img.src = "images/Star.png";
    this.img.onload = function(){
      this.draw();
    }.bind(this);
  this.move = function(){
    this.x -= 6;
  }
  this.draw = function(){
    this.move();
    ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    if(this.x < 0){
      //random + algo
      var randomX = Math.floor(Math.random() * 800 );
      var randomY = Math.floor(Math.random() * 600 )
      this.x = canvas.width + randomX;
      this.y = randomY;
      
    }
    

  }
  this.redraw = function(){
    var randomX = Math.floor(Math.random() * 800 );
    var randomY = Math.floor(Math.random() * 600 )
    this.x = canvas.width + randomX;
    this.y = randomY;
  }
}
function Star2(){
  this.x = canvas.width + 1;
  this.y = 600;
  this.width = 25;
  this.height = 25;
  this.img = new Image();
    this.img.src = "images/Star.png";
    this.img.onload = function(){
      this.draw();
    }.bind(this);
  this.move = function(){
    this.x -= 6;
  }
  this.draw = function(){
    this.move();
    ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    if(this.x < 0){
      //random + algo
      var randomX = Math.floor(Math.random() * 800 );
      var randomY = Math.floor(Math.random() * 600 )
      this.x = canvas.width + randomX;
      this.y = randomY;
      
    }
    

  }
  this.redraw = function(){
    var randomX = Math.floor(Math.random() * 800 );
    var randomY = Math.floor(Math.random() * 600 )
    this.x = canvas.width + randomX;
    this.y = randomY;
  }
}

function Star3(){
  this.x = canvas.width + 1;
  this.y = 600;
  this.width = 25;
  this.height = 25;
  this.img = new Image();
    this.img.src = "images/Star.png";
    this.img.onload = function(){
      this.draw();
    }.bind(this);
  this.move = function(){
    this.x -= 6;
  }
  this.draw = function(){
    this.move();
    ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    if(this.x < 0){
      //random + algo
      var randomX = Math.floor(Math.random() * 800 );
      var randomY = Math.floor(Math.random() * 600 )
      this.x = canvas.width + randomX;
      this.y = randomY;
      
    }
    

  }
  this.redraw = function(){
    var randomX = Math.floor(Math.random() * 800 );
    var randomY = Math.floor(Math.random() * 600 )
    this.x = canvas.width + randomX;
    this.y = randomY;
  }
}
function Star4(){
  this.x = canvas.width + 1;
  this.y = 600;
  this.width = 25;
  this.height = 25;
  this.img = new Image();
    this.img.src = "images/Star.png";
    this.img.onload = function(){
      this.draw();
    }.bind(this);
  this.move = function(){
    this.x -= 6;
  }
  this.draw = function(){
    this.move();
    ctx.drawImage(this.img,this.x,this.y,this.width,this.height);
    if(this.x < 0){
      //random + algo
      var randomX = Math.floor(Math.random() * 800 );
      var randomY = Math.floor(Math.random() * 600 )
      this.x = canvas.width + randomX;
      this.y = randomY;
      
    }
    

  }
  this.redraw = function(){
    var randomX = Math.floor(Math.random() * 800 );
    var randomY = Math.floor(Math.random() * 600 )
    this.x = canvas.width + randomX;
    this.y = randomY;
  }
}


function generatePlanets(){
planets.forEach((planet)=>{
  planet.draw()
})

stars.forEach((star)=>{
  star.draw()
})
   
}




function start(){

  board.music.play();

  if( intervalo > 0 ) return;
  
  intervalo = setInterval(function(){
    update();
  },1000 / 60 ); 

  tardi.y = 350;
  board.scorePlanets = 0;
  board.scoreStars = 0;
  
  bullets = [];
  music2.play();

}

function update(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  board.draw();
  frames ++;
  generatePlanets();
  bullets.forEach((bullet, indexB) => {
    bullet.draw();
    console.log(planets)
    planets.forEach((planet, indexP) => {
      if(bullet.isTouching(planet)){
        bullets.splice(indexB,1);
        console.log("collision")
        planets[indexP].num--;
        if (planets[indexP].num<=0){
          planets[indexP].redraw();
          board.scorePlanets+=1;
        }
      }
    })
    bullet.move = true;
  });
  stars.forEach((star,index) =>{
    if(tardi.isTouching(star,1)){
      console.log("estoy tocando una estrella");
      stars[index].redraw();
      board.scoreStars+=1;
    }
  })
  board.drawScorePlanets();
  board.drawScoreStars();
  board.drawTime();
  tardi.draw();
  TimeAgotado();
}
function pause(){
  clearInterval(intervalo);
  intervalo = 0;
  board.music.pause();
  
  }


document.getElementById("start").addEventListener("click", start);
document.getElementById("pause").addEventListener("click", pause);



addEventListener("keydown",function(e){
  if(e.keyCode === 13){
    console.log("el enter si sirve");  
    start();
  }
  
  if(e.keyCode === 82 ){
    reStart();
  }

  if(e.keyCode === 38 && tardi.y > 9.9999 ){
    tardi.moveUp();
    shoot.moveUp();
  }

  if(e.keyCode === 40 && tardi.y < 550 ){
    tardi.moveDown();
    shoot.moveDown();
  }

  if(e.keyCode === 37 && tardi.x > 0 ){
    tardi.moveLeft();
    shoot.moveLeft();
  }

  if(e.keyCode === 39 && tardi.x < 300){
    tardi.moveRight();
    shoot.moveRight();
  }
  if(e.keyCode === 32 ){
    createShoots();
    
   }
   if(e.keyCode === 16 ){
     pause();
   }
})


function notificacion(){
  ctx.font = "60px 'Press Start 2P'";
  ctx.fillStyle = "yellow";
  ctx.fillText("Tiempo Agotado", 200, 200 );
  ctx.font = "45px 'Press Start 2P'";
  ctx.fillText("Jugador Dos, ¡es tu turno!",20,300 );
  ctx.font = "30px 'Press Start 2P'";
  ctx.fillText("Presiona 'R' para comenzar",220,400 );
}

function TimeAgotado(){
  if(board.time === 0 ) {
    notificacion();
    pause();
    
  }
}

function reStart(){
start();
}
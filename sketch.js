
var turret,turretdos,zombie,zombie1,zombie2,zombie3,zombie4,le_shoot,le_stab;
var bggif,turretimg,turretimg2,zombieimg,zombie1img,zombie2img,zombie3img,zombie4img,bulletimg,laserimg;
var groupuno, groupdos, zombiegroup,blastimg;
var groupofsword;
var score=0;
var boss,bossimg,sword,swordimg,totaloblivion;
var health=500;
var game_over,ko_img;
var  visiblity = 255;
var gamestate=0;

function preload()
{
	bggif=loadImage("giphy.gif")
	turretimg=loadImage("gun_gif.gif")
	zombieimg=loadImage("zombie.png")
	zombie1img=loadImage("zombie1.png")
	zombie2img=loadImage("zombie2.png")
	bossimg=loadImage("boss.png")
	blastimg=loadImage("blast.png")
	zombie3img=loadImage("zombie3.gif")
	zombie4img=loadImage("zombie4.png")
	swordimg=loadImage("sword.png")
    turretimg2=loadImage("gun3.png")
	ko_img=loadImage("ko.png")
	game_over=loadImage("gameover.jpg")
	bulletimg=loadImage("laser2.png")
	laserimg=loadImage("laser copy.png")
}

function setup() {
	createCanvas(windowWidth-10,displayHeight-150);

turret=createSprite(displayWidth-100,500)
turret.addImage(turretimg)
turretimg.resize(400,250)

turretdos=createSprite(windowWidth-100,displayHeight-115);
turretdos.addImage(turretimg2)
turretimg2.resize(400,250)


sword=createSprite(-350,400,100,100)
	sword.addImage(swordimg)

//setCollider()
groupuno=new Group();
groupdos=new Group();
groupofsword=new Group()
zombiegroup=new Group()

boss=createSprite(-200,325)
 boss.addImage(bossimg)

// zombie=createSprite(200,500)
// zombie.addImage(zombieimg)
// zombieimg.resize(200,200)
  
}


function draw() {
  background(bggif);

  turret.y=mouseY;
  turretdos.y=mouseY-200;
 
  if(gamestate===0){

	

  if(keyWentDown(32)){
	  bulletcome()
	  lasercome() 
	  
  }




zombie_go_brrr()
createZombie()
createZombie2()
createZombie3()
createZombie4()


strokeWeight(10)
textSize(20)
text("score="+score,100,50)

	for (var i = 0; i < zombiegroup.length; i++) {

		if(zombiegroup.isTouching(groupuno)||zombiegroup.isTouching(groupdos)){

          zombiegroup.get(i).destroy();
		  score+=10
		}

	}

	if(zombiegroup.isTouching(turret)){

		gamestate=3;
	}

	if(score>=1000){
    
     gamestate=2131818;
      
	}

}


if(gamestate===2131818){

turretdos.destroy()
  zombiegroup.destroyEach()

  

  if(health>0 && health<501){

  fill('red'); 
  rect(220,45,1000,25);
  fill(0,255,0);
  rect(220,45,health*2,25);

  textSize(20)
 stroke("black")
 strokeWeight(20)
 
 text("WALKING UN-DEAD",600,50)

  }


  if(boss.x=150)
  {

  boss.velocityX=0

  }
  else{boss.velocityX=5}

if(keyWentDown(32)) {

	throwSword()
}
  


  if(le_stab.isTouching(boss)){

   health-=0.5

  }

  
  

  if(health<0){
	  health = -10
	//   textSize(300)
	//   stroke("black")
	//   strokeWeight(20)
	//   text("K.O !!!",windowWidth/2-100,windowHeight/2)
	

	boss.destroy()

	push()
    visiblity-=1
	tint(255,visiblity)
	image(bossimg,150,325)
	image(ko_img,windowWidth/2-500,windowHeight/2-250)
	ko_img.resize(1000,500)

	pop()

	turret.destroy()
  }

  

 if(health<0 && visiblity<0){

	textSize(25)
	stroke("black")
strokeWeight(20)
	text("congratulations,for you have defeated the legendary boss....the battle was hard fought but the victor was clear.",20,windowHeight/2)
    text("Sincere thanks from all of space-city.....",70,windowHeight/2+90)
 }

  
 

  push()
 visiblity-=5;
  tint(255,visiblity)
    image(blastimg,windowWidth-250,mouseY-400)


//  turretdos.velocityX=5
//  turretdos.lifetime=100
 
pop()


 
   
  if(keyWentDown(32)){
		lasercome()
}

if(turret.isTouching(sword)){

	turret.destroy()
	gamestate=3
	
}

}

if(gamestate===3){

	background(game_over)
	zombiegroup.destroyEach()
	turret.destroy()
	turretdos.destroy()
	boss.destroy()
	
}


  drawSprites();
 


  

}

function bulletcome(){

le_shoot=createSprite(windowWidth-280,mouseY-200,100,100)
le_shoot.addImage(bulletimg)
bulletimg.resize(100,100)
le_shoot.velocityX=-15
groupuno.add(le_shoot)
//console.log("hello World")
  

}

function throwSword() {

	sword.y=mouseY
	sword.velocityX=15
    if(sword.x>2000){
		sword.x=-350

	}
	
	//groupofsword.add(sword)

}

function lasercome(){

 le_stab=createSprite(windowWidth-280,mouseY,100,100)
 le_stab.addImage(laserimg)
 laserimg.resize(50,50)
le_stab.velocityX=-20
groupdos.add(le_stab)
}


function zombie_go_brrr() {

if(frameCount%Math.round(random(48,57))===0){

 zombie=createSprite(200,Math.round(random(70,height-70))+Math.round(random(-30,50)))
 zombie.addImage(zombieimg)
 zombieimg.resize(150,150)
 zombie.velocityX=Math.round(random(1,4));


 if(frameCount%100===0){
	 zombie.y=Math.round(random(Math.round(random(1,65)),height-60))+Math.round(random(-30,50))
 }
zombiegroup.add(zombie)
}
 
   

} 

function createZombie() {

	if(frameCount%Math.round(random(50,76))===0){
	
	 zombie1=createSprite(150,Math.round(random(100,height-90))+Math.round(random(-30,19)))
	 zombie1img.resize(200,200)
	 zombie1.addImage(zombie1img)
	 	 zombie1.velocityX=Math.round(random(1,6));
	
	 if(frameCount%100===0){
		 zombie1.y=Math.round(random(Math.round(random(1,105)),height-60))-Math.round(random(30,50))
	 }
	zombiegroup.add(zombie1)
	}
	
	  

	} 

	function createZombie2() {

		if(frameCount%Math.round(random(70,130))===0){
		
		 zombie2=createSprite(150,Math.round(random(90,height-90))+Math.round(random(-47,63)))
		 zombie2.addImage(zombie2img)
		 zombie2img.resize(150,200)
		 zombie2.velocityX=Math.round(random(1,6));
		
		 if(frameCount%100===0){
			 zombie2.y=Math.round(random(Math.round(random(1,105)),height-60))-Math.round(random(30,50))
		 }
		zombiegroup.add(zombie2)
		}
		

		}
		
		function createZombie3() {

			if(frameCount%100===0){
			
			 zombie3=createSprite(150,Math.round(random(50,height-80))+Math.round(random(-50,34)))
			 zombie3.addImage(zombie3img)
			 zombie3img.resize(200,200)
			 zombie3.velocityX=Math.round(random(1,6));
			
			 if(frameCount%100===0){
				 zombie3.y=Math.round(random(Math.round(random(1,78)),height-59))-Math.round(random(-10,70))
			 }
			zombiegroup.add(zombie3)
			}
			
			} 

			function createZombie4() {

				if(frameCount%135===0){
				
				 zombie4=createSprite(150,Math.round(random(100,height-90))+Math.round(random(-30,19)))
				 zombie4.addImage(zombie4img)
				 zombie4img.resize(200,200)
				 zombie4.velocityX=Math.round(random(1,5));
				
				 if(frameCount%100===0){
					 zombie4.y=Math.round(random(Math.round(random(1,105)),height-60))-Math.round(random(30,50))
				 }
				zombiegroup.add(zombie4)
				}
				
				} 

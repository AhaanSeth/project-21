var wall; thickness;
var bullet, speed, weight


var speed, weight;

var thickness = random(22,83)


function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);

  speed = random(55,90)

  weight = random(400, 1500)

  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255);
  
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80)

  speed = random(223, 321)
  weight = random(30, 52)

}

function draw() {
  background(0);  

if(wall.x-bullet.x < (bullet,width+wall.width)/2)
{
  bullet.velocity = 0;
  var deformation = 0.5 * weight * speed * speed/22509;
  if(deformation>180)
  {
    bullet.shapeColor = color(255, 0, 0);
  }

  if(deformation<189 && deformation>100)
  {
    bullet.shapeColor = color(230, 230, 0);
  }

  if(deformation<100)
  {
    bullet.shapeColor = color(230, 230, 0);
  }
}

drawSprites();
}

function hasCollided(Lbullet, Lwall)
{
     bulletRightEdge = 1bullet.x +1bullet.width;
     wallLeftEdge = 1wall.x;
     if (bulletRightedge>=wallLeftEdge)
     {
         return true
     }
     return false;

     if (hasCollided(bullet, wall))
{
  bullet.velocityX = 0;
  var damage = 0.5 * weight * speed * speed/(thickness *thickness *thickness);


if (damage>10)
{
    wall.shapecolor = color(255, 0, 0);
}



if (damage<10)
{
    wall.shapecolor = color(0, 255, 0);
}

}


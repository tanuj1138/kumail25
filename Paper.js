class Paper {
  constructor(x, y, r) {
 

  this.x= x;
  this.y = y;
  this.r =r;
  this.image = loadImage("paperimg25.png");
  var options = {
    isStatic : false,
    restitution: 0.3,
     friction: 1,
     density : 3,
    }
  this.body= Bodies.circle(x, y, r/2, options);

  World.add(world, this.body);
}

display(){
  var pos =this.body.position;
  push();
  translate(pos.x, pos.y);
  imageMode(CENTER);
  stroke("brown");
  strokeWeight(4);
  fill("white");
  image(this.image,0,0,this.r);
  pop();
}
};

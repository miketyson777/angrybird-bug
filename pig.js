class Pig {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0,
      }
     
      this.width = width;
      this.height = height;
      this.x=x;
      this.y=y;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.image=loadImage("sprites/enemy.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      fill("green");
      stroke("black")
      strokeWeight(7)
      image(this.image,0, 0, this.width, this.height);
      pop();
    }
  };
  
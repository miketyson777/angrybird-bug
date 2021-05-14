class Log {
    constructor(x, y, height,angle) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':1.0,
          isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width,angle, options);
      this.width = 40;
      this.height = height;
      //this.image=loadImage("sprites/wood2.png")
      Matter.Body.setAngle(this.body,angle)
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill(181,101,29);
      stroke("black")
      strokeWeight(7)
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  
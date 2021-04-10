class Snow {
    constructor(x, y,r) {
      var options = {
          'restitution':1.3,
          'friction':0,
          'density':1
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(this.x, this.y, (this.r-20)/2, options);
      
      World.add(world, this.body);
    }
    display(){
      var snowpos =this.body.position;
      
      push();
      translate(snowpos.x, snowpos.y);
      ellipseMode(CENTER);
      strokeWeight(0.5);
      stroke ("black")
      fill("white");
      ellipse(0, 0, this.r, this.r);
      pop();
    }
  };
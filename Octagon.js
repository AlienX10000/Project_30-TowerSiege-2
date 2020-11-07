class Octagon{
  constructor(x, y, r) {
      var options = {
        'restitution':0.5,
        'friction':1.0,
        'density':5.0
     }
      this.body = Bodies.circle(x, y, r, options);
      this.r = r;
      
      this.image = loadImage("Octagon.png");
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.r*2, this.r*2);
  }
}
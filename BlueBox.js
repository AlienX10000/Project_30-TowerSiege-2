class BlueBox{
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':0.8
    }
  this.body = Bodies.rectangle(x,y,width,height,options);
  this.width = width;
  this.height = height;

  this.visibility=255;
  this.image = loadImage("Blue box.png");

  World.add(world, this.body);
  }
  display(){
    if (this.body.speed>3){
      World.remove(world, this.body);
      push();
      tint(255,this.visibility)
      this.visibility=this.visibility-25
      image(this.image, this.body.position.x, this.body.position.y, this.width, this.height);
      pop();
      
      if (this.visibility===0) {
        this.body.distroy;
      }
      
    }else{
      var pos = this.body.position;
      imageMode(CENTER);
      image(this.image, pos.x, pos.y, this.width, this.height);
    }
  }
}
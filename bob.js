class Bob {
    constructor (x,y,r) {
        var options = {
            restitution: 0.5,
            friction: 0.2,
            density: 1.2,
            isStatic: true
        }

        this.body = Bodies.circle(x,y,r,options)
        this.radius = r
        World.add(world,this.body)
       
    }

   display() {
       var pos = this.body.position
       fill(225);
       circle(pos.x,pos.y,this.radius);
   }

}
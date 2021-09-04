class Ball {
    constructor(x, y, r) {
        this.r = r
        this.body = Bodies.circle(x,y,this.r,{restitution : 0.8})
        World.add(world,this.body)
    }
    show() {
        ellipseMode(CENTER)
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
    }
}
class Base{
    constructor(x,y,width,height,angle){
        var options={
            restitution:1,
            friction:1,
            density:1
        }
        this.body=Bodies.rectangle(x,y,width,height,options)
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        World.add(bodies,this.body)
    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,this.x,this.y,width,height)
        pop()
    }
}
class ground{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            restitution : 0.1
        }
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options)
        World.add(world, this.body);
    }

    display(){
        fill("white");
        rectMode(CENTER)
        rect(this.x,this.y,this.width,this.height)
    }
}
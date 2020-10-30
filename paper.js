class Paper
{
    constructor(x,y,width,height)
    {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height
        this.body = Bodies.circle(200,450,35,options)
        this.image = loadImage("crumpled_ball-removebg-preview.png");
        World.add(world,this.body);
    }
    display()
    {
        var paperpos = this.body.position;

        push();
        translate(paperpos.x, paperpos.y);
        imageMode(CENTER);
        strokeWeight(3);
        fill(255,0,255);
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}
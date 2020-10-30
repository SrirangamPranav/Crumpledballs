class Dustbin
{
	constructor(x, y)
	{
		this.x = x;
		this.y = y;
        this.width = 180;
        this.height = 180;
		this.wallThickness = 20;
		this.angle = 0;
		this.image = loadImage("dustbingreen.png");

		var options =
		{
			isStatic: true
		}
		this.Wall1 = Bodies.rectangle(this.x, this.y, this.width, this.wallThickness, options);

		var xPos = this.x - (this.width / 2);
		var yPos = this.y - (this.height / 2);
		this.Wall2=Bodies.rectangle(xPos, yPos, this.wallThickness, this.height, options);
		Body.setAngle(this.Wall2, this.angle);

		xPos = this.x + (this.width / 2);
		this.Wall3 = Bodies.rectangle(xPos, yPos, this.wallThickness, this.height, options);
		Body.setAngle(this.Wall3, -1 * this.angle);
		
		World.add(world, this.Wall1);
		World.add(world, this.Wall2);
		World.add(world, this.Wall3);

	}
	
	display()
	{
			var poswall1 = this.Wall1.position;
			var poswall2 = this.Wall2.position;
			var poswall3 = this.Wall3.position;

			push();
			translate(poswall2.x, poswall2.y);
			fill(255);
			angleMode(RADIANS);			
			rotate(this.angle);
			pop();

			push();
			translate(poswall3.x, poswall3.y);
			fill(255);
			angleMode(RADIANS);
			rotate(-1 * this.angle);
			pop();

			push();
			translate(poswall1.x, poswall1.y + 10);
			fill(255);
			angleMode(RADIANS);			
			imageMode(CENTER);
			image(this.image, 0, -this.height / 2, this.width, this.height);
			pop();
	}
}
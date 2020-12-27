class Dustbin
{
    constructor(x,y,r)
    {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2


        }

        this.x=x;
        this.y=y;
        this.r=r;
        
    }
    display()
        {
            var dustbinpos=this.body.position;

            push()
            translate(dustbinpos.x, dustbinpos.y);
            rectMode(CENTER)
            strokeWeight(3);
            fill(255,0,255)
            pop()
        }
}
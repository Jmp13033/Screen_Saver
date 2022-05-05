const canvas = document.querySelector("canvas")
const c = canvas.getContext("2d")
canvas.width =  innerWidth
canvas.height = innerHeight



/*for(var i = 1;  i < 400; i ++) {
    const x = Math.random() * window.innerWidth ; 
    const y = Math.random() * window.innerHeight ;  
    c.beginPath()
    c.arc(x,y,30,0, Math.PI * 2, false)
    c.strokeStyle = "blue"
    c.stroke()

    }


/*c.beginPath()
c.arc(200,100,30,0, Math.PI * 2, false)
c.stroke()
*/


var mouse = {
    x: undefined,
    y: undefined

}
var maxRadius = 40;
var minRadius = 2; 

var array = [
    "#ffa33",
    "#99ffaaa",
    "#99ff322",
    "#4411aa",
    "#ff1100",



];

window.addEventListener("mousemove", function(event)
{

    mouse.x = event.x
    mouse.y = event.y
    console.log(mouse)

    

}) ;


function Circle(x,y,dx,dy,radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius
    this.minRadius = radius;
    this.color = array[Math.floor(Math.random() * array.length)]

    this.draw = function()
    {
        c.beginPath()
        c.arc(this.x,this.y,this.radius,0, Math.PI * 2, false)
        c.fillStyle = this.color;
        c.fill()
        

    }
    
    this.update = function() {
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0 )
{
    this.dx = -this.dx
}

if(this.y + this.radius > innerHeight || this.y - this.radius < 0 )
{
    this.dy = -this.dy
}
 this.x += this.dx 
 this.y += this.dy

 if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50) 
 {
     if(this.radius < maxRadius ) {
        this.radius += 1;

     }
     

 } else if(this.radius > this.minRadius) {
    this.radius -= 1;

 }
 this.draw()


    }

}



var circlearray = []
for(var i = 0; i < 1000; i ++)
{
    var radius = Math.random() * 3 + 1;
    circlearray.push(new Circle(x,y,dx,dy,radius));
   
    var y = Math.random() * (innerWidth - radius * 2) + radius
    var x = Math.random() * (innerHeight - radius * 2) + radius
    
    var dx = (Math.random() - 0.5) * 8
    var dy = (Math.random() - 0.5) * 4

    

}
console.log(circlearray)


function animate()
{
    requestAnimationFrame(animate)
    c.clearRect(0,0,innerWidth, innerHeight)
    for(var i = 0; i < circlearray.length; i ++ ){
        circlearray[i].update();

    }
    

}
animate()


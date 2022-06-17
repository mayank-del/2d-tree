/* const canvas =document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width=1000;
canvas.height=1200;
const myImage=new Image();
myImage.src='R.png';

myImage.addEventListener('load',function(){
    ctx.drawImage(myImage,0,0);
})




function draw(){
    ctx.beginPath();
    ctx.fillStyle =mappedImage[this.position1][this.position2][1];
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
    ctx.fill();
    
    
} */


/* 
myImage.addEventListener('load',function(){
    const canvas =document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;
    
    ctx.drawImage(myImage,0,0,canvas.width,canvas.height);
    const pixel =ctx.getImageData(0,0,canvas.width,canvas.height);
    ctx.clearRect(0,0,canvas.width,canvas.height);


    let particleArray =[];
const numberOfPartcles=5000;

let mappedImage =[];
for(let y=0; y < canvas.height; y++){
    let row =[];
    for(let x=0; x<canvas.width; x++){
        const red =pixel.data[(y * 4 * pixel.width)+(x * 4)];
        const green =pixel.data[(y * 4 * pixel.width)+(x * 4 + 1)]; 
        const blue =pixel.data[(y* 4* pixel.width)+(x * 4 + 2)];
        const brightness = calculateRelativeBrightness(red,green,blue);
        const cell=[
            cellBrightness= brightness,
            cellColor='rgb('+red+','+green+','+blue+')'
        ];
        row.push(cell);
    }
    mappedImage.push(row);
}
console.log(mappedImage);
function calculateRelativeBrightness(red,green,blue){
    return Math.sqrt(
        (red*red)*0.299+
        (green*green)*0.587+
        (blue*blue)*0.114
    )/100;
}

class Particle{
    constructor(){
        this.x=Math.random()*canvas.width;
        this.y=0;
        this.speed=0;
        this.velocity=Math.random()*0.7;
        this.size=Math.random()*1.5+1;
        this.position1 =Math.floor(this.y);
        this.position2 =Math.floor(this.x);
     
    }
    update(){
        this.position1 =Math.floor(this.y);
        this.position2 =Math.floor(this.x);
        this.speed =mappedImage[this.position1][this.position2][0];
        let movement =(4.5-Math.cos(this.speed))+Math.sin(this.velocity);
        
        this.y+=movement;

        if(this.y>=canvas.height){
            this.y=0;
            this.x=Math.random()*canvas.width;
        }
    }
draw(){
    ctx.beginPath();
    ctx.fillStyle =mappedImage[this.position1][this.position2][1];
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
    ctx.fill();
    
}
}
function init(){
    for(let i=0;i<numberOfPartcles;i++){
        particleArray.push(new Particle);
    }
}
init();
function animate(){
    
    ctx.globalAlpha=0.05;
    ctx.fillStyle='rgb(6,3,0)';
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.globalAlpha=0.2;
    for(let i=0;i<particleArray.length;i++){
        particleArray[i].update();
        ctx.globalAlpha=particleArray[i].speed;
        particleArray[i].draw();
        
    }
    requestAnimationFrame(animate);
}
animate();
}); */

function setup(){
    createCanvas(windowWidth,windowHeight)
    angleMode(DEGREES);
    noloop();
}
function draw(){
    background(100)
}
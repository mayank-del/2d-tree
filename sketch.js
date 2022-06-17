l_portion=-23
  r_portion=50
  let ctx;
function setup(){
  createCanvas(windowWidth,windowHeight)
  angleMode(DEGREES);
   ctx=canvas.getContext("2d");
  //setInterval(setInterval (setInterval(loop,random(100,120)),300),90)
  
  
}
function draw(){
  background(10)
  translate(width/2,height/2+200);
  ctx.shadowColor="#0ff";
  ctx.shadowBlur=35;
 // colorMode(HSB,310,140,100,200);
  branch(120);

  //noLoop();
  
}
function branch(len){

  push();
  if(len>30){
    strokeWeight(map(len,19,101,1,18))
   // stroke(20,20,90)//for color of wood
   v1="rgb(133, 251, 255)"
   v2="rgb(13, 124, 228)"
   //v2,v2,alpha
   stroke(v1)
   
    line(0,0,0,-len)
    translate(0,-len)
    //rotate(random(-25,-27))
    rotate(map(noise(l_portion),0,1,-25,-27))

    branch(len*0.79);
    rotate(map(noise(r_portion),0,1,50,55))
    //rotate(random(50,53))
    branch(len*0.79);

    l_portion+=0.0001
    r_portion+=0.0001
    

  }else{
    var r=80+random(-20,20)
    var g=40+random(-20,20)
    var b=90+random(-10,80)

    fill(r,g,b,990)
    noStroke()
   // ellipse(0,0,10)
   beginShape()
   /* for(var i=45;i<135;i++){
     var rad =15;
     var x=rad * cos(i);
     var y=rad * sin(i);
     vertex(x,y)
   }
   for(var i=135;i>45;i--){
    var rad =15;
    var x=rad * cos(i);
    var y=rad * sin(-i) +20;
    vertex(x,y)
  }

   endShape(CLOSE) */
  
  }
  
  pop();


}

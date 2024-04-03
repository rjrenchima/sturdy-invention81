 canvas = document.getElementById("my_canvas");

colour = "blue";

ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.strokeStyle = colour;
ctx.lineWidth = 3;
ctx.arc(150,200,60,0,2*Math.PI);
ctx.stroke();


canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e){

    colour = document.getElementById("colour").value;
    console.log(colour);
    mouse_x = e.clientX - canvas.offsetLeft;
    mouse_y = e.clientY - canvas.offsetTop;
    console.log("x= " +mouse_x+ ",y= "+mouse_y);
    circle(mouse_x , mouse_y);

}

function circle(mouse_x , mouse_y){
 ctx.beginPath();
ctx.strokeStyle = colour;
ctx.lineWidth = 3;
ctx.arc(mouse_x,mouse_y,60,0,2*Math.PI);
ctx.stroke();
}

function clearcanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}

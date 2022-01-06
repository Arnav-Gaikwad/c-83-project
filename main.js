var last_x_pos , last_y_pos ;

canvas = document.getElementById("myCanvas") ;
ctx=canvas.getContext("2d") ;
color ="black" ;
line_width= 1 ;
var width =screen.width ;
new_width=width-50;
new_height=screen.height-300;

if(width<992){
   canvas.width=new_width;
   canvas.heigh=new_height;
   document.body.style.overflow="hidden";
}


canvas.addEventListener("touchstart" , my_touchstart) ;


function my_touchstart(e) {
    console.log ("inside touchstart");
    color= document.getElementById("c1").value ;
    line_width= document.getElementById("w1").value ;
    last_x_pos=e.touches[0].clientX-canvas.offsetLeft ;
    last_y_pos=e.touches[0].clientY-canvas.offsetTop ;
 }


canvas.addEventListener("touchmove" , my_touchMove) ;
function my_touchMove(e) {
    console.log ("touchmove")
    current_x_pos = e.touches[0].clientX - canvas.offsetLeft ;
    current_y_pos = e.touches[0].clientY - canvas.offsetTop ;
        ctx.beginPath () ;
        ctx.strokeStyle = color ;
        ctx.lineWidth = line_width ;
        ctx.moveTo(last_x_pos ,last_y_pos) ;
        ctx.lineTo(current_x_pos , current_y_pos) ;
        ctx.stroke() ;
    

    last_x_pos=current_x_pos ;
    last_y_pos=current_y_pos ;

}


function clear1() {
    ctx.clearRect(0,0,ctx.canvas.width , ctx.canvas.height)
}
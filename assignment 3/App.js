let a = 10 
let b = 11 
document.write(a++, b++);
document.write(`<h6>the value is 10 11</h6<`)

console.log(a,b)

document.write(a,b);
document.write(`<h6>the value is 11 12</h6<`)



let x = 5
let y = 8
//        --x             // pre increment
//        ++y
// console.log(x,y)
//  x--                      // post increment
//  y++
//  console.log(x,y)

console.log(--x - y + ++y + y--) ///ans 14


let number = prompt("enter your number you want to multiplay")

if(number===""||number===null){
  number=8
}
document.write("<h1>table of"+number+"</h1>")
document.write(number+ "x1="+ (number*1)+"<br>");
document.write(number+ "x2="+ (number*2)+"<br>");
document.write(number+ "x3="+ (number*3)+"<br>");
document.write(number+ "x4="+ (number*4)+"<br>");
document.write(number+ "x5="+ (number*5)+"<br>");
document.write(number+ "x6="+ (number*6)+"<br>");
document.write(number+ "x7="+ (number*7)+"<br>");
document.write(number+ "x8="+ (number*8)+"<br>");
document.write(number+ "x9="+ (number*9)+"<br>");
document.write(number+ "x10="+ (number*10)+"<br>");



 
 let sub1 = prompt("enter you first subject ");
 let sub2 = prompt("enter you second subject ");
 let sub3 = prompt("enter you third subject ");
 
 let totalmark = 100;
 
 let mark1 = prompt("enter your"+sub1+"mark"+"<br>");
 let mark2 = prompt("enter your"+sub2+"mark"+"<br>");
 let mark3 = prompt("enter your"+sub3+"mark"+"<br>");
 
 let totalobtain = mark1 + mark2 + mark3;
 let grandtotal =totalmark*3;
 let percentage = (totalobtain/grandtotal)*100;

document.write("<h1>MARK SHEET")
document.write(sub1 +":"+ mark1 +":"+ totalmark+"<br>");
document.write(sub2 +":"+ mark2 +":"+ totalmark+"<br>");
document.write(sub3 +":"+ mark3 +":"+ totalmark+"<br><br>");

document.write("<h1>RESULT</h1>")
document.write("total make"+":"+grandtotal+"<br>")
document.write("total obtain"+":"+totalobtain+"<br>")
document.write("percentage"+":"+percentage.toFixed(2)+"%")













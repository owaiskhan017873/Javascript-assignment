

////////////////////      CHAPTER 9/11
 
// 1.

let city = "karachi"
if(city=="karachi"){
  alert("city of light")
}



// 2.
let gender = prompt("enter your gender male,female")
if(gender=="male"){
  alert("Good morning sir")
}
else{
  alert("good morning ma'am")
}


// 3. 
let color = prompt("Enter any color from traffic light","red")
if(color=="red"){
  alert("must stop")
}
else if(color=="yellow"){
  alert("Reday to move")
}
else if(color=="green"){
  alert("move now")
}



// 4.
let fuel = prompt("enter remaning fuel in liter","0.25")
if(fuel < 0.25){
  alert("please refill the fuel in your car")
}
else{
  alert("you have enough fuel in the car")
}


//5. 
let x = 4 
if(++x==5){
  document.write("true"+"<br>"+"<br>")
}



// 6. 
let mark1 = +prompt("Enter you first suject mark");
let mark2 = +prompt("Enter you Second suject mark");
let mark3 = +prompt("Enter you Third suject mark");
let totalmark = +prompt("Enter total mark")

let obtainmark = mark1 + mark2 + mark3;
let percentage = (obtainmark/totalmark)*100 

let grade,remark;

if(percentage>=80){
  grade="A-one"
  remark="Excellent"
}
else if(percentage>=70){
  grade="A"
  remark="Good"
}
else if(percentage>=60){
  grade="B"
  remark="you need to improve"
}
else{
  grade="F"
  remark="fail"
}
document.write("<h1>Mark sheet</h1>"+"<br>")
document.write("Total marks:"+totalmark+"<br>")
document.write("mark obtain:"+obtainmark+"<br>")
document.write("percentage:"+percentage.toFixed(2)+"%"+"<br>")
document.write("Grade:"+grade+"<br>")
document.write("Remark:"+remark+"<br><br><br>") 


// 7.
let secretnum = 7
let numguess = +prompt("guess the secret number 1 to 10")
if(numguess===secretnum){
  alert("correct")
}
else{
  alert("try again")
}


// 8.
let num3 = +prompt("write any number 1 to 1000")
if(num3 % 3==0){
  alert("num is divisible by 3")
}
else{
  alert("wrong")
}


// 9.
let num5 = +prompt("cheak any number its even or odd")
if(num5 % 2==0){
  alert("even")
}
else{
  alert("odd")
}



// 10.
let temp = +prompt("enter your area temperature")
if(temp>40){
  alert("its too hot to go outside")
}
else if(temp>30){
  alert("the weather is today normal")
}
else if(temp>20){
  alert("today weather is cool")
}
else{
  alert("today weather is soo cool")
}


// 11. 
let num0=+prompt("Enter you first number to calculate")
let num9=+prompt("Enter you second number to calculate")
let operation = prompt("Enter the operator(+,*,/,-,%)")
let result

if(operation=="+"){
  result=num0 + num9;
}
else if(operation=="-"){
  result=num0 -num9;
}
else if(operation=="/"){
  result=num0 / num9;
}
else if(operation=="*"){
  result=num0*num9;
}
else if(operation=="%"){
  result=num0 % num9;
}
else{
  result="invalid operation"
}
document.write("<h1>calculator</h1>")
document.write("first number:"+num0+"<br>")
document.write("second number:"+num9+"<br>")
document.write("operator:"+operation+"<br>")
document.write("result:"+result+"<br>") 





  ///////////////////// CHAPTER 12/13




// 1.
let char = prompt("Enter any character")
let code = char.charcodeAt(0);
if(code>=48 && code<=57){
  console.log("inputer is a number")
}
else if(code>=65&&code<=90){
  console.log("input is upperrcase latter")
}
else if(code>=97 &&code<=122){
  console.log("input is lowercase latter")
}
 

//2. 
 let num6 = +prompt("enter first number");
let num7 = +prompt("enter second number");

if(num6==num7){
  alert("equal")
}
else if(num6>num7){
  alert("num6 is big")
}
else if(num6<num7){
  alert("num7 are big")
}
else{
  alert("invalid input")
} 



//3.
let number2 = +prompt("enter number cheak positive negive or zero")

if(number2==0){
  alert("zeor")
}
else if(0<number2){
  alert("positive")
}
else if(number2<0){
  alert("negitive")
}
else{
  alert("invalid")
} 



//4.
  let char1 = prompt("enter one character").toLowerCase();

if(char1.length===1){
   if(char1==='a' || char1==='e' || char1==='i' || char1==='o'  || char1==='u'){
     alert("true")
   }
   else{
    alert("false")
  }
}
else{
  alert("enter only one character")
} 


// 5. 
let password = 1234 
let pass1 =  +prompt("enter password character")
let re;
if(pass1===password){
  alert("correct")
}
else if(pass1!==password){
 re = +prompt("please enter a password")
 if(pass1==password){
   alert("correct")
 }
 else{
   alert("wrong")
 }
}


//6. 
let greeding;
let hour =13
if(hour>18){
  greeding="good day"
}
else{
  greeding ="evening"
} 



//7. 
let time = +prompt("enter 24 hour format 2400 under")

if(time>=0 && time<=1200){
  alert("goodmorning")
}
else if(time>=1200 && time<=1700){
  alert("good afternoon")
}
else if(time>=1700 && time<=2100){
  alert("good evening")
}
else if(time>=2100 && time<=2400){
  alert("good night")
}
else{
  alert("invalid")
}
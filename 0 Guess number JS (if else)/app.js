/* Description
Create kerain Guess Number Game using JavaScript.
Logic Build kerain.
1 sy 10 ke darmiyan 1 correct answer save kery local variable main:
User sy prompt lijiye number between (1 to 10)
agar user 1 number prompt deta hai or answer match na hoto user ko different messages show kerain using console.log().
user ki value aapky number say qareeb or door hosakti hai diffrent messages show kijiye.
Hint:
Use If, else, else if ===> multiple times
Console Messages kesy hon:
low guess hai
Thoda sa better guess
qareeb ho rahe ho
thoda sa or try karo
Bas ek step door ho
🎯 Correct! */

let number = +prompt("enter number 1 to 10 guess screct number")

if(number<=3 && number>=0){
  console.log("low guess hai")
}
else if(number<=10 && number>=8){
  console.log("thoda sa or better guess")
}
else if(number==4 || number==7){
  console.log("gareed ho rhe ho")
}
else if(number==5){
  console.log("bas ik step pas ho")
}
else if(number===6){
  console.log("correct")
}
else{
  console.log("invalid input")
}

      //// CHAPTER 26\30


//Q1
let integ = prompt("enter positive intiger")
alert("Number " + integ)
console.log("Question 8   "+" round of " + Math.round(integ) + " floor value " + Math.floor(integ)  + " ceil value " + Math.ceil(integ) )






//Q2
let NagInt = prompt("enter the nagitive intiger")
console.log("Question 2" + NagInt)
console.log(" round of " + Math.round(NagInt) )
console.log("floor value" + Math.floor(NagInt))
console.log("ceil value" + Math.round(NagInt))







//Q3
let get = +prompt("dispaly absolute number")

let absolute;

if(get < 0){
      absolute = -get
}
else{
      absolute = get
}
console.log("abslute value of" + get + " is " + absolute )






//Q5
let coin = Math.random()
if(coin < 0.5) {
      console.log("HEAD")
}
else{
      console.log("TAIL")
}







//Q6
let RnNum100 = Math.floor(Math.random()*100)
console.log("math 1 to 100 is: "+ RnNum100)





//Q7

let weight = prompt("enter your WEIGHT")
let kg = weight + " kg"
console.log(kg)



//Q8
let SecretNum = Math.floor(Math.random()*10)+1
let Numb = +prompt("enter the secret number 1 to 10")
if(SecretNum === Numb){
      console.log("CORRECT")
}
else{
      console.log("WRONG")
}

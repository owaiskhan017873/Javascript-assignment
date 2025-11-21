    // CHAPTER 35/38
    


//Q1 
function currentdate (){
    let currenDate = new Date()
    return currenDate
}

document.writeln("<h2>" + "Question 1" + "</h2>" + "<br>")
document.writeln(currentdate() + "<br>")



//Q2
function fullname (){
    let firstname = "muhammad"
    let lastname = "owais"
    let Fullname = firstname +" "+ lastname 
    return Fullname
}
console.log(fullname())



//Q3

// function totalnum (){
//     let fistnum = +prompt("enter first num to sum")
//     let secondnum = +prompt("enter second num to sum")
//     let Sum = fistnum + secondnum
//     return Sum
// }

// console.log(totalnum())


//Q4
// function calculator (){
//     let num1 = +prompt("the num1 to calculate")
//     let num2 = +prompt("enter num2 to calculate")
//     let operator = prompt("enter the operator +,-,/,%")
//     if(operator === "+"){
//          alert(num1 + num2) 
//     }
//     else if(operator === "-"){
//        alert(num1 - num2)
//     }
//     else if(operator === "/"){
//         alert(num1 / num2)
//     }
//     else if(operator === "%"){
//        alert(num1 % num2)
//     }
//     else{
//         alert("invalid operation")
//     }
// }
// calculator()





//Q5
function square(num){
    return num * num
}
console.log(square(2))



//Q6
function factor(n){
    let f = 1 
    for(let i = 1;i<=n;i++){
        f = f * i
    }
    return f
}
console.log(factor(4))


//Q7
// function count(){
// let first = +prompt("enter the starting number")
// let last = +prompt("enter the ending number")
// for(let i = first;i <= last;i++){
//     console.log(i)
// }
// }

// count()


//Q8

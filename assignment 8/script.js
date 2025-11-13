
//      CHARPTER 23/25



//Q1

let num = 33.443
let str = toString().replace(".","")
console.log(str)
console.log(typeof(str))








//Q2
let user = prompt("enter the username")
let valid = true

for(i = 0;i<user.length;i++){
    let sym = user[i]  
    if(sym == "@" || sym == "." || sym == "," || sym == "!" ){
       valid = false 
       break
    }

}
if(valid){
    alert(user + "is valid username")
}
else{
    alert(user + "is invalid user")
}







//Q3
let A = ["cake","apple pie","cookie","chips","patties"]
let userInput = prompt("enter the search item","apple pie")
let querry = userInput.toLowerCase();
let found = true 
for(let i = 0 ; i<A.length;i++){
    if(A[i].toLowerCase()=== querry){
        found = true
    console.log("found")
    break;
    }
}
if(found){
    alert(userInput + "is avalible on the list")
}
else{
alert(userInput + "is not on the list")
}





//Q4 
let password = prompt("enter the password")
let hasAlphabet = false
let number = false 
for(let i = 0 ; i<password.length;i++){
    let ch = password[i]
    if((ch >= "A" && ch <= "z" ) || (ch >= "a" && ch <= "z") ){
        hasAlphabet = true 
    }
    else if( ch >= "0" && ch <= "9"){
        number = true
    }
}
if(password.length > 6){
    alert("password must be 6 character")
}
else if(password[0] >= "0" && password[0] <= "9"){
 alert("password shuld not with start a number")
}
else if(!number || !hasAlphabet){
    alert("password must contain both aplhaber and Number")
}
else{
    alert("password accepted")
}





//Q5
// let uni1 = "University of Karachi";
//     let arr1 = uni1.split("");

//     for (let i = 0; i < arr.length; i++) {
//       document.write(arr1[i] + "<br>");
//     }








//Q6
let user1 = prompt("enter the word or sentecne to cheak the last word")
let lastChar = user1[user1.length -1]
console.log("q6 =>" + lastChar)
console.log("q6 =>" + user1)





//Q7
let text = "the quick brown fox jumps over the lazy dog"
let lowertext = text.toLowerCase()
let words = lowertext.split(" ")
let count = 0
for(let i = 0 ;i<words.length;i++){
    if(words[i] === "the")[
        count++
    ]
}





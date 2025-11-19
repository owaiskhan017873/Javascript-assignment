// //                    CHAPTER 31/34



// //Q1 
// let CurrentDate = new Date()
// alert(CurrentDate)


// //Q2
// let CurrentMonth = new Date()
// let Month = ["january","faburay","march","april","may","june","july","august","septempter","octuber","november","december"]
// let CM = Month[CurrentMonth.getMonth()]
// alert("Current Month is " + CM)


// //Q3
// let CurrentDay = new Date()
// let Day = ["sun","mon","tue","wed","thu","fri","sat"]
// let CD = Day[CurrentDay.getDay()]
// alert( "Today is " + CD)


// //Q4
// let today = new Date()
// let day = today.getDay()
// if(day === 1 || day === 6){
//     console.log("its fun day")
// }


// //Q5
// let message = new Date()
// let Dates = message.getDate()
// if(Dates < 15){
//     alert("first fifteen days of the month")
// }
// else{ 
//     alert("last days of the month")
// }



//Q6
let curDate = new Date()
document.writeln("Current Date : " + curDate)

let MilliSec = curDate.getTime()
document.writeln("Elapsed milliseconds since January 1, 1970 : " + MilliSec)

let min = (MilliSec / (1000 * 60 ) )
document.writeln("Elapsed minutes since january 1 , 1970 :" + min) 


//Q7
let hours = new Date()
let hr = hours.getHours()
if(hr < 13){
  alert("its AM")
}
else{
    alert("its PM")
}


//Q8
let laterDate = new Date("2020","11","31")
console.log(laterDate)


//Q9
let FirstRamadam = new Date("2015","5","18")
let newdate = new Date()

let sincePassed = Math.floor(((newdate -  FirstRamadam) / ( 1000 * 60 * 60 *24)))
console.log(sincePassed)


//Q10
let time = new Date("2025","0","1")
let current = new Date()
let ans = ((current - time) / (1000))
console.log(ans) 


//Q11
let Current = new Date()
let set = Current.getHours()
Current.setHours(set - 1)
console.log(Current)


//Q12
let Current1 = new Date()
let past = Current1.getFullYear()
Current1.setFullYear(past - 100)
console.log(Current1)


//Q13
let age = +prompt("enter your age")
let current2 = new Date()
let currentyear = current2.getFullYear()
let birth = currentyear - age 
alert("birth : " + birth)


//Q14

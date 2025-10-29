       
                 //CHAPTER 14/16

//Q1.
let studentname = []

//Q2.
let Studentname = new Array()

//Q3.
let stringNum = ["string",]

//Q4.
let NumberArry = [1, 2, 3]

//Q5.
let BooleanArry = [true, false,]

//Q6.
let MixedArry = [1, "string", 2, "String", true, 4, false]



//Q7.
let EducationArry = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.phil.", "PhD"]
document.write("<h1>Qualification</h1>")
document.write("1)"+EducationArry[0]+"<br>")
document.write("2)"+EducationArry[1]+"<br>")
document.write("3)"+EducationArry[2]+"<br>")
document.write("4)"+EducationArry[3]+"<br>")
document.write("5)"+EducationArry[4]+"<br>")
document.write("6)"+EducationArry[5]+"<br>")
document.write("7)"+EducationArry[6]+"<br>")
document.write("8)"+EducationArry[7]+"<br><br><br>")




//Q8. 
let StudentName = ["Michel","Jhon","Tony"]
let StudentScore = ["290","455","355"]
let totalmark = 500

let percentage1 = (StudentScore[0]/totalmark)*100
document.write("score of "+StudentName[0]+" is "+StudentScore[0]+". "+"percentage "+percentage1.toFixed(2)+"%"+"<br>")

let percentage2 = (StudentScore[1]/totalmark)*100
document.write("score of "+StudentName[1]+" is "+StudentScore[1]+". "+"percentage "+percentage2.toFixed(2)+"%"+"<br>")

let percentage3 = (StudentScore[2]/totalmark)*100
document.write("score of "+StudentName[2]+" is "+StudentScore[2]+". "+"percentage "+percentage3.toFixed(2)+"%"+"<br><br><br>")




//Q9.

let color = ["red", "Green", "yellow"]
document.write("<b>"+"colors: "+"</b>"+color+"<br>")

//a).add color in the begining

let addcolor = prompt("add a color in begining")
color.unshift(addcolor);
document.write("<b>"+"new added color: "+"</b>"+color+"<br>")

//b).add color in the end 

let endcolor = prompt("add color at the end")
color.push(endcolor);
document.write("<b>"+"added color at the end: "+"</b>"+color+"<br>")

//c).added two color in the begining
color.unshift("blue","black")
document.write("<b>"+"add 2 color in the begining"+"</b>"+color+"<br>")

//d).delete first color 
color.shift()
document.write("<b>"+"deleted first color:"+"</b>"+color+"<br>")

//e). delete last color 
color.pop()
document.write("<b>"+"deleted last color"+"</b>"+color+"<br>")

//F). insert color or index where to add 
let indexNumber = +prompt("insert index numver to add color")
let addColor = prompt("insert color name")
color.splice(indexNumber,0,addColor)
document.write("<b>"+"inserted color "+"</b>"+addcolor+"<br>")
document.write("<b>"+"colors "+"</b>"+color+"<br>");

//g). at which index and how many color you want to delete

let indexdelete = +prompt("insert number at which index do you want delete colors")
let numdelete = +prompt("insert number of color you want to delete")
color.splice(indexdelete,numdelete);
document.write("<b>After deleting "+ numdelete +"colors from in dex "+indexdelete+ ":</b>"+color +"<br><br>")

//removing user defind colors 
color.shift()
document.write("upadted color "+color+"<br><br>")





//Q10.
let Score = ["320","230","480","120"]
Score.sort()
document.write("arrange score"+Score+"<br><br>")




//Q11. 
let city = ["karachi","lahore","islamabad","quetta","peshawar"]
city.slice(0,3)
console.log(city)



//Q12.
let arr = ["this","is","my","cat"]
let ans = arr.join(" ")
console.log(ans)



//Q13.
let queue = []
queue.unshift("apple")
queue.unshift("banana")
queue.unshift("charry")
console.log("all value",queue)
console.log("first value",queue.shift())
console.log("second value",queue.shift())
console.log("third value",queue.shift())




//Q14.
let lastin = []
lastin.push("moniter")
lastin.push("keyboard")
lastin.push("mouse")
console.log("all value",lastin)
console.log("first value",lastin.pop())
console.log("second value",lastin.pop())
console.log("third value",lastin.pop())




//Q15.
let mobileCompany = ["Samsung", "Apple", "Oppo", "Vivo", "Xiaomi", "Infinix"];
document.write("<select>");
document.write("<option>" + mobileCompany[0] + "</option>");
document.write("<option>" + mobileCompany[1] + "</option>");
document.write("<option>" + mobileCompany[2] + "</option>");
document.write("<option>" + mobileCompany[3] + "</option>");
document.write("<option>" + mobileCompany[4] + "</option>");
document.write("<option>" + mobileCompany[5] + "</option>");
document.write("</select>");
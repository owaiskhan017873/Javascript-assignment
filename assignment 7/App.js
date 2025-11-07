 
                  //Chapter 20/23 

//Q1 
let FirstNamePerson = prompt("enter you first name")
let LastNamePerson = prompt("enter you last name")
let FullName = FirstNamePerson+" "+LastNamePerson
document.write("<h2>"+"Q1"+"</h2>"+"<br>")
document.write("ans"+"/"+FullName+"<br><br>")





//Q2
let FMobile = prompt("Enter your favorite mobile name")
document.write("<h2>"+"Q2"+"</h2>"+"<br>")
document.write("ans"+"/"+" My Favorite phone is :"+FMobile+"<br>")
document.write("Length of String : "+FMobile.length+"<br>"+"<br>")





//Q3
let word = "Pakistan";
let index = word.indexOf("n");
alert("The index of letter 'n' in '" + word + "' is: " + index)






//Q4
let word1 = "Hello World"
let index1 = word1.indexOf("l");
alert("The index of letter 'l' in '" + word1 + "' is: " + index1);






//Q5
let word2 = "Pakistan"
let index2 = word2.indexOf("i");
alert("The index of letter `i` in "+word2+" is :"+index2)





//Q6
let TooFullName = FirstNamePerson.concat(" ",LastNamePerson)
document.write("<h2>"+"Q6"+"</h2>"+"<br>")
document.write(TooFullName+"<br>"+"<br>")




//Q7
let city = "Hyderabad"
let NewCity = city.replace("Hyderabad","Islamabad")
document.write("<h2>"+"Q7"+"</h2>"+"<br>")
document.write("city :"+city+"<br>")
document.write("After Replacement :"+NewCity+"<br>"+"<br>")







//Q8
let message = "ali and sami are bestfrind. they play cricket and football togeather."
let Newmessage = message.replaceAll("and","&")
document.write("<h2>"+"Q8"+"</h2>"+"<br>")
document.write("message :"+message+"<br>")
document.write("new message"+Newmessage+"<br>"+"<br>")





//Q9
let Number1 = "123"
let Number2 = Number(Number1)
document.write("<h2>"+"Q9"+"</h2>"+"<br>")
document.write("number string : "+Number1+"<br>")
document.write("after number : "+Number2+"<br>"+"<br>")




//Q10 
let input = "peanut"
let input2 = input.toUpperCase()
document.write("<h2>"+"Q10"+"</h2>"+"<br>")
document.write("small latter : "+input+"<br>")
document.write("large latter : "+input2+"<br>"+"<br>")





//Q11 
let text = "javascript"
let text2 = text.charAt(0).toUpperCase()+ text.slice(1).toLowerCase();
document.write("<h2>"+"Q11"+"</h2>"+"<br>")
document.write("first message : "+text+"<br>")
document.write("title Case : "+text2+"<br>"+"<br>")






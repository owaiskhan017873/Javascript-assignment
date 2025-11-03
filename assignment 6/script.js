                   //CHAPETER 17/20 
                   
                   
//Q1
let MultiArray = [1,"owais",2,[3,4,5],"hamza"]
console.log(MultiArray)


//Q2.
let Multiarray = [
  [0,1,2,3],
  [1,0,1,2],
  [2,1,0,1]
  ]
console.log(Multiarray)




//Q3.
for(let i =1;i<=10;i++){
  console.log(i)
}





//Q4.
let Table = +prompt("Enter the Number for table")
for(let i = 1 ; 10>=i;i++){
  document.write(Table+" X "+i+" = "+i*Table+"<br>")
}
document.write("<br><br>")







//Q5. 
let Fruit = ["Apple","banana","mango","orange","Strawbarrey"]
for(let i = 0 ; Fruit.length>i;i++){
    document.write(Fruit[i],"<br>")
}
document.write("<br><br>")
for(let i = 0 ;i<Fruit.length;i++){
  document.write("element at index "+i+" is "+Fruit[i]+"<br>")
}
document.write("<br><br>")





//Q6 
document.write("<h3>"+"counting :"+"</h3>")
for(let i = 1 ; i<16;i++){
  document.write(i+",")
}
document.write("<br>"+"<h3>"+"Reverse counting :"+"</h3>")
for(let i = 16 ; i>0;i--){
  document.write(i+",")
}
document.write("<br>"+"<h3>"+"Even :"+"</h3>")
for(let i = 0 ; i<=20;i+=2){
  document.write(i +",")
}
document.write("<br>"+"<h3>"+"odd :"+"</h3>")
for(let i =1;i<20;i+=2){
  document.write(i,",")
}
document.write("<br>"+"<h3>"+"Series :"+"</h3>")
for(let i =0 ;i<=10;i+=2){
  document.write(i+"k,")
}
document.write("<br><br>")






//Q7.
 let find = ["cake","apple pic","cookie","chips","patties"]
 let Ask = prompt("enter the food name see its on the list","cookie")
 let found =true
 for(let i = 0;i<find.length;i++){
   if(find[i]==Ask){
     document.write(find[i]+" is on the list")
     found=true
     break;
   }
 }
 if(!found){
   document.write(find[i]+" is not on the list")
 }
 document.write("<br><br>")
 
 
 
 
 
  //Q8.
 let largestArray = [122,443,674,678,754,578]
 let largest = largestArray[0]
 for(let i = 1 ;i<largestArray.length;i++){
   if(largestArray[i]>largest){
     largest = largestArray[i]
   }
 }
   document.write(largest+" is the largest")
   
   document.write("<br><br>")
  
  
  
  
  
//Q9.
let SmArray = [2938,2929,2939,1039,9239,2901,1092,1020,2921,2929,1029,1828,1929]
let small = SmArray[0]
for(let i = 1;i<SmArray.length;i++){
  if(small>SmArray[i]){
    small=SmArray[i]
  }
}
document.write(small+" is the smallest number")

document.write("<br><br>")




//Q10.
for(let i = 0;i<=100;i+=5){
  document.write(i+",")
}
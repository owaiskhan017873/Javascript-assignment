let atm = 100000
let salary = 50000 
let widthdraw;
if(atm>salary){
  alert("scaned")
    widthdraw = +prompt("enter amount to widhraw")
  if(widthdraw<=salary){
    salary = salary - widthdraw 
    alert("widhraw")
    
    alert("remaning salary:" + salary)
  }
  else if(widthdraw>salary){
    alert("widthdraw amount is more than salary")
  }
}
else if(salary>atm){
  alert("cannot widthdraw")
}
else{
  alert("amount out of widthdraw")
}





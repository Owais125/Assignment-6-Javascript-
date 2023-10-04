
// ***************Q:1***************

function Timedate(){
console.log(Date())
}

Timedate()

// ***************Q:2***************

function name1(x,y)
{
console.log("Welcome To Web Page Mr "+x+ y)
}
var userInput1 = prompt("Enter Your First Name")

var userInput2 = prompt("Enter Your Second Name")

name1(userInput1,userInput2)


// ***************Q:3***************


function name2(a,b)
{
return a+b
}
var UserInput1 = prompt("Enter Your First Name")

var UserInput2 = prompt("Enter Your Second Name")

var Fullname = name2(UserInput1,UserInput2)

console.log(Fullname)


// ***************Q:4***************

 function calc(num1, opr, num2) {
   if (opr === "+") {
     return num1 + num2;
   }
    else if (opr === "-") {
     return num1 - num2;
   }
    else if (opr === "*") {
     return num1 * num2;    
   }
    else if (opr === "/") {
     return num1 / num2;
   }
   else if (opr === "%") {
    return num1 % num2;
  }
 }

 var num1 = +prompt("Enter first value");
 var operator = prompt("Enter operator");
 var num2 = +prompt("Enter second value");

 var result = calc(num1, operator, num2);

 console.log(result);


// ***************Q:5***************

function srqure(a){

    console.log(a*a)

}
var userInput = prompt("Enter The Squre Number Value")

srqure(userInput)

// ***************Q:6***************

function multiplicationTable(f,g ) {
       for (var i = 1; i <= g; i++) {
         document.write(i + "<br>");
       }
     }
    
     var Starts = +prompt("Enter number Starts Counting");
     var End = +prompt("Enter number End Counting");
    
     multiplicationTable(Starts, End)


// ***************Q:7***************




function Area(r,t)
{
console.log("Area = "+ r * t)
}
var width = +prompt("Enter The Width of  Rectangle Area")

var height = +prompt("Enter The height of  Rectangle Area")

Area(width,height)


// ***************Q:8***************

function palindrome(h){
    var check = "";

for (var i = h.length - 1; i >= 0; i--) {
 
    check += h[i];
}


if (h === check) {
    console.log(h + " is a palindrome word");
} else {
    console.log(h + " is not a palindrome word");
}

}


var word = prompt("Enter a word");

palindrome(word)


// ***************Q:9***************

function example(userexapmle){
    // var userexapmle =""
    console.log(userexapmle)
}
var userexapmle = prompt("Enter the Sentense")
 userexapmle = userexapmle.toUpperCase()

example(userexapmle)


// ***************Q:10***************




function  argument(e){
for (var i = 0; i < e.length; i++) {
  if (e.slice(i ) === "o") {
    console.log("o is  found...");
  }
}
}


var text = prompt("Enter some text");


argument(text)


// ***************Q:11(a)***************



function Circumferenceofcircle(y){

  var pie = 3.142
  
  console.log("Circumference of circle = "+ 2*pie*y)
  
  
  }
  
  var Circumference = prompt("Enter The Radius of Circumference")
  
  Circumferenceofcircle(Circumference)

// ***************Q:11(b)***************

function Areaofcircle(z){

  var pie = 3.142
  
  console.log("Area of circle  = "+ pie*z*z)
  
  
  }
  
  var Areacircle = prompt("Enter The Radius of Circle")
  
  Areaofcircle(Areacircle)

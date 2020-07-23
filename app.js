// Chapter 1

//Q1
// var greet = "Welcome to our website"
// alert(greet);
// //Q2
// var q2 = "Error! Please enter a valid password."
// alert(q2);
// //Q3
// var q3 = "Welcome to JS Land..... \n Happy Coding!"
// alert(q3);
// //Q4
// var q4 = "Welcome to JS Land..."
// var q4a = "happy Coding!"
// alert(q4);
// alert(q4a);
// //Q5
// var q5 = "Hello... I can run JS through my web browser's console"
// alert(q5);

// CHAP 2

// //Q1
// document.getElementById("add").innerHTML = 3+5;
// //Q2
// document.getElementById("sub").innerHTML = 3-5;
// document.getElementById("mul").innerHTML = 3*5;
// document.getElementById("div").innerHTML = 3/5;
// document.getElementById("mod").innerHTML = 3%5;
// //Q3
// var val = 6;
// document.getElementById("vari").innerHTML = "Value after variable declaration is:"+" "+val;


// var username
// var myName = "Ayesha Rashid"
// alert(myName);

// var message = "Hello World";
// alert(message);++

// var biodata = "Ayesha Rashid";
// var age = "15 years old";
// var course = "Certified Mobile Application Development"
// alert(biodata);
// alert(age);
// alert(course);

// var pizza = "PIZZA \nPIZZ \nPIZ \nPI \nP"
// alert(pizza);

// var email = "My email address is example@example.com"
// alert(email);

// var book = "A smarter way to learn Javascript"
// alert("I am trying to learn from the Book"+" "+book);

// document.getElementById("demo").innerHTML = "Yah! I can write HTML content through JavaScript";

// var st = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"
// alert(st);


// var age = 24;
// alert("I am"+" "+age+" "+"years old.");

// var counter = "You have visited this site N times";
// alert(counter);

// var birthyear = 1994;
// document.getElementById("demo").innerHTML = "My birth year is"+" "+birthyear;
// document.getElementById("demo1").innerHTML = "Data type of my declared variable is number";

// var visitor_name = "John Doe";
// var product_title = "T-Shirts";
// var quantity = 5
// document.getElementById("demo2").innerHTML = visitor_name+" "+"ordered"+" "+quantity+" "+product_title+"(s)"+" "+"on XYZ Clothing store";


// var t1 = "a) A heading stating “Rules for naming JS variables"
// var t2 = "b) Variable names can only contain ______, ______,______ and ______."
// var t3 = "For example $my_1stVariable"
// var t4 = "c) Variables must begin with a ______, ______ or_____. For example $name, _name or name"
// var t5 = "d) Variable names are case _________"
// var t6 = "e) Variable names should not be JS _________"

// document.getElementById("tx").innerHTML = t1;
// document.getElementById("tx2").innerHTML = t2;
// document.getElementById("tx3").innerHTML = t3;
// document.getElementById("tx4").innerHTML = t4;
// document.getElementById("tx5").innerHTML = t5;
// document.getElementById("tx6").innerHTML = t6;



// Chapter 6 to 9

// var a = 10;
// document.getElementById("maths").innerHTML = "Result:"+"<br>"+" The value of a is:"+" "+a+"<br>"+"---------------------------";

// var b = ++a;
// document.getElementById("maths1").innerHTML = "The value of ++a is:"+b+"<br>"+"Now the value of a is"+b;

// var c = a++;
// document.getElementById("maths2").innerHTML = "The value of a++ is:"+b+"<br>"+"Now the value of a is"+c;

// var d = --c;
// document.getElementById("maths3").innerHTML = "The value of --a is:"+b+"<br>"+"Now the value of a is"+d;

// var e = d--;
// document.getElementById("maths4").innerHTML = "The value of a-- is:"+b+"<br>"+"Now the value of a is"+e;




// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// document.getElementById("maths5").innerHTML  = "The result is "+result;

// var user = prompt("Enter your name?");
// var greet = "A Warm Welcome to you"+" "+user;
// alert(greet);

// var t = +prompt("Enter a table number");
// for(var i = 1; i <= 10; i++){
//     if (t >= 1) {
//         document.write("<br>"+t + "x" + i + "=" + t*i + "<br>")
//     }
//     else {
//         document.write("<br>"+"5" + "x" + i + "=" + 5*i + "<br>")
//     }
// }


// var Subj1 = +prompt("Enter English Marks");
// var Subj2 = +prompt("Enter Maths Marks");
// var Subj3 = +prompt("Enter Urdu Marks");
// var tot = parseInt(Subj1+Subj2+Subj3);

// var subjects = [["English"], ["Maths"], ["Urdu"]]
// var total = parseInt(100);

// var per1 = Subj1;
// var per2 = Subj2;
// var per3 = Subj3;

// for(var i = 0; i <= subjects.length; i++) {
//     if (Subj1,Subj2,Subj3 >= 1) {
//         document.write("<br>"+"SUBJECT"+" "+" TOTAL"+" "+"MARKS OBT"+"PERCENTAGE"+"<br>"+subjects[0]+" "+total+" "+Subj1+"   "+per1+"%"+"<br>"+subjects[1]+" "+total+" "+Subj2+"   "+per2+"%"+"<br>"+subjects[2]+" "+total+" "+Subj3+"   "+per3+"%"+"<br>");
//         break;
//     }
//     else {
//         document.write("<br>"+"Please write again"+"<br>");
//     }
// }


// CHAPTER 9 To 11
// var city = prompt("Enter City Name");
// if (city == "Karachi"){
//     document.write("<br>"+"Welcome to city of lights"+"<br>");
// }
// else {
//     document.write("<br>"+"You are not in Karachi"+"<br>");
// }

// var genders = ["Male", "Female"]
// var gender = prompt("Enter your gender");
// if (gender == genders[0]){
//     document.write("Good Morning Sir"+"<br>");
// }
// else if (gender == genders[1]){
//     document.write("Good Morning Ma'am"+"<br>");
// }
// else {
//     document.write("Good Morning"+"<br>");
// }

// var traffic_signal = ["Red", "Yellow", "Green"];
// var signal = prompt("Enter Traffic Light color");
// if (signal == traffic_signal[0]){
//     document.write("Must Stop"+"<br>");
// }
// else if (signal == traffic_signal[1]){
//     document.write("Ready to Move"+"<br>");
// }
// else if (signal == traffic_signal[2]){
//     document.write("Move Now"+"<br>");
// }
// else {
//     document.write("You have not selected traffic signal color"+"<br>");
// }

// var fuel = +prompt("Enter your Fuel in litres");
// if (fuel < 0.25){
//     document.write("Please refill the fuel in your car"+"<br>");
// }
// else {
//     document.write("You have enough fuel"+"<br>");
// }


// var a = 4;
// if (++a === 5){
//     document.write("given condition for variable a is true"+"<br>");
// }

// var b = 82;
// if (b++ === 83){
//     document.write("given condition for variable b is true"+"<br>");
// }

// var c = 12;
// if (c++ === 13){
//     document.write("condition 1 is true"+"<br>");
// }
// if (c === 13){
//     document.write("condition 2 is true"+"<br>");
// }
// if (++c < 14){
//     document.write("condition 3 is true"+"<br>");
// }
// if(c === 14){
//     document.write("condition 4 is true"+"<br>");
// }


// var materialCost = parseInt(20000);
// var laborCost = parseInt(2000);
// var totalCost = materiaCost + laborCost;
// if (totalCost === laborCost + materialCost){
//     document.write("The cost equals"+"<br>");
// }
// if (true){
//     document.write("True"+"<br>");
// }
// if (false){
//     document.write("False"+"<br>");
// }

// if("car" < "cat"){
//     document.write("car is smaller than cat"+"<br>");
// }


//Markssheet
// var total_m = parseInt(300);
// var eng = +prompt("Enter English Marks");
// var urdu = +prompt("Enter Urdu Marks");
// var math = +prompt("Enter Maths Marks");
// var total_marks = eng + urdu + math;
// var percent = (total_marks*100/300);

// if (percent >= 80){
//     document.write("<br"+"MARKSSHEET"+"<br>"+"Total Marks "+" : "+total_m+"<br>"+"Marks Obtained "+" : "+total_marks+"<br>"+"Percentage"+" : "+percent+"%"+"<br>"+"Grade "+" : "+"A-One"+"<br>"+"Remarks "+" : "+"Excellent");
// }
// else if (percent >= 70){
//     document.write("MARKSSHEET"+"<br>"+"Total Marks "+" : "+total_m+"<br>"+"Marks Obtained "+" : "+total_marks+"<br>"+"Percentage"+" : "+percent+"%"+"<br>"+"Grade "+" : "+"A"+"<br>"+"Remarks "+" : "+"Good");
// }
// else if (percent >= 60){
//     document.write("MARKSSHEET"+"<br>"+"Total Marks "+" : "+total_m+"<br>"+"Marks Obtained "+" : "+total_marks+"<br>"+"Percentage"+" : "+percent+"%"+"<br>"+"Grade "+" : "+"B"+"<br>"+"Remarks "+" : "+"You need to improve");
// }
// else {
//     document.write("MARKSSHEET"+"<br>"+"Total Marks "+" : "+total_m+"<br>"+"Marks Obtained "+" : "+total_marks+"<br>"+"Percentage"+" : "+percent+"%"+"<br>"+"Grade "+" : "+"Fail"+"<br>"+"Remarks "+" : "+"Sorry");
// }

// Guess Name
// var secret = parseInt(4);
// var secret_num = +prompt("Enter secret number");
// if (secret_num == 4){
//     document.write("<br>"+"This is secret number"+"<br>")
// }
// else{
//     document.write("<br>"+"This is not secret number"+"<br>")
// }

// CHAPTER 12 - 13

// var num1 = +prompt("Enter 1st number");
// var num2 = +prompt("Enter 2nd number");
// if (num1 > num2){
//     document.write("<br>"+"1st Number is greater"+"<br>");
// }
// else if (num2 > num1){
//     document.write("<br>"+"2nd Number is greater"+"<br>");
// }
// else {
//     document.write("<br>"+"Both Numbers are equal"+"<br>");
// }


// var greeting = 0;
// var hour = parseInt(13);
// if (hour < 18) {
//     document.write(greeting = "Good day");
// }
// else {
//     document.write(greeting = "Good evening");
// }

// var students = ["Micheal", "Hasan", "Affan"];
// var score = [387, 421, 129];
// var perctg = ["64%", "46%", "96%"]
// document.write("Score of "+students[0]+" is "+" : "+score[0]+"."+" "+"Percentage: "+perctg[0]+"<br>");
// document.write("Score of "+students[1]+" is "+" : "+score[1]+"."+" "+"Percentage: "+perctg[1]+"<br>");
// document.write("Score of "+students[2]+" is "+" : "+score[2]+"."+" "+"Percentage: "+perctg[2]+"<br>");

// var colors = ["Red", "Green", "Yellow", "Pink"];
// document.write(colors[0]+"<br>"+colors[1]+"<br>"+colors[2]+"<br>"+colors[3]+"<br>");

// CHAPTER 17-20
// for(var a = 1; a < 11; a = a+1){
//     document.write(a + "<br>")
// }

// var tab = +prompt("Enter a number to show its multiplication table");
// for(var i = 1; i <= 10; i++){
//     document.write("<br>"+tab + "x" + i + "=" + tab*i + "<br>")
// }

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// document.write(fruits);
// document.write("<br>"+"Element at index 0 is "+fruits[0]);
// document.write("<br>"+"Element at index 1 is "+fruits[1]);
// document.write("<br>"+"Element at index 2 is "+fruits[2]);
// document.write("<br>"+"Element at index 3 is "+fruits[3]);
// document.write("<br>"+"Element at index 4 is "+fruits[4]);


// document.write("Counting" + "<br>");
// for(var ba = 0; ba <= 15; ba++){
//     document.write(ba+ "<br>");
// }

// document.write("even" + "<br>");
// for(var even = 0; even <= 20; even = even+2){
//     document.write(even+ "<br>");
// }

// document.write("Odd"+ "<br>");
// for(var odd = 1; odd <= 20; odd = odd+2){
//     document.write(odd + "<br>");
// }

// document.write("Series" + "<br>");
// for(var evenk = 1; evenk <= 20; evenk = evenk+2){
//     document.write(evenk+ "<br>");
// }

// var bakery = ["cake", "apple pie", "cookie", "chips", "patties"];
// var bak = prompt("Welcome to the ABC bakery. What do you want to order?");
// if (bak == bakery[0]){
//     document.write("<br>"+"Cake is available at index 2 in our bakery"+"<br>");
// }
// else if (bak == bakery[1]){
//     document.write("<br>"+"apple pie is available at index 2 in our bakery"+"<br>");
// }
// else if (bak == bakery[2]){
//     document.write("<br>"+"cookie is available at index 2 in our bakery"+"<br>");
// }
// else if (bak == bakery[3]){
//     document.write("<br>"+"chips is available at index 2 in our bakery"+"<br>");
// }
// else if (bak == bakery[5]){
//     document.write("<br>"+"patties is available at index 2 in our bakery"+"<br>");
// }
// else {
//     document.write("<br>"+"We are sorry. pastry is not available in our bakery"+"<br>");
// }

// document.write("Multiple of given number"+ "<br>");
// for(var multi = 1; multi <= 100; multi = multi*5){
//     document.write(multi + "<br>");
// }

// CHAPTER 21-25
// // var fname = prompt("Enter your first name");
// // var lname = prompt("Enter your last name");
// // var fullname = (fname+" "+lname);
// // document.write("Welcome"+" "+fullname+" "+"to the JS Land!"+"<br>");

// // var mobile = prompt("Enter your favorite mobile phone model");
// // var length = prompt("Enter the required length of mobile")
// // document.write("My favorite phone is:"+" "+mobile+"<br>");
// // document.write("Length of string:"+" "+length+"<br>");

// // function myFunction(){
// //     var str = "Pakistani";
// //     var n = str.indexOf("n");
// //     document.write("String: Pakistani");
// //     document.write(n);
// // }

// // function myFunction(){
// //     var str1 = "Hello World";
// //     var n1 = str1.lastindexOf("l");
// //     document.write("String: Hello World");
// //     document.write(n1);
// // }


// // function myFunction() {
// //     var str2 = "Pakistani";
// //     var n2 = str2.indexOf(5);
// //     document.write("String: Pakistani");
// //     document.write(n2);
// //   }

// // var fname1 = prompt("Enter your first name");
// // var lname1 = prompt("Enter your last name");
// // var fullname1 = (fname1+" "+lname1);
// // document.write("Welcome"+" "+fullname1+"<br>");

// // function myFunction() {
// //     var str3 = document.getElementById("demo11").innerHTML; 
// //     var res = str3.replace("Hyder", "Islam");
// //     document.getElementById("demo11").innerHTML = res;
// // }

// // var message = "Ali and Sami are best friends. They play cricket and football together.";
// // var mess = message.replace("and", "&");
// // document.write(message);
// // document.write(mess);

// // const typeme = new String("472");
// console.log(typeof typeme); //=> "object"
// const typeme1 = new String(472);
// console.log(typeof typeme1); //=> "object"

// var upc = prompt("Enter a word in upper case");
// var up1 = upc.toUpperCase();
// document.write("User Input: "+upc);
// document.write("Upper case: "+up1);

// function titleCase(str) {
//     return str.toLowerCase().split(' ').map(function(word) {
//       return (word.charAt(0).toUpperCase() + word.slice(1));
//     }).join(' ');
// }
// titleCase("javascript");

// var num = 35.36 ;
// function remove_third_character(num) {
//     return element.substr(1,element.length)
// }
// console.log(remove_third_character("."));

// function mySearch() {
//     var a = ["cake", "apple pie", "cookie", "chips", "patties"];
//     var b = /concern/i;
//     var r = a.match(b);
//     document.getElementById("myId").innerHTML = r;
// }

// function generatePassword() {
//     var length = 8,
//         charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
//         retVal = "";
//     for (var i = 0, n = charset.length; i < length; ++i) {
//         retVal += charset.charAt(Math.floor(Math.random() * n));
//     }
//     return retVal;
// }

// function myFunction() {
//     var str = ("How are you doing today?"+"<br>");
//     var res = str.split();
//     document.getElementById("demo12").innerHTML = res;
// }

// function myFunction() {
//     var str = "Hello planet earth, you are a great planet.";
//     var n = str.lastIndexOf("planet");
//     document.getElementById("demo12").innerHTML = n;
// }

// var par = "The quick brown fox jumps over the lazy dog";
// function wordCounter(par) {
//     var text = input.value;
//     var wordCount = 0;
//     for (var i = 0; i <= text.length; i++) {
//       if (text.charAt(i) == ' ') {
//         wordCount++;
//       }
//     }
//     count.innerText = wordCount;
// }

// Chapter 26-30

// var roundt = +prompt("Enter a number to round off");
// var scoreAvg = Math.round(roundt);
// var scoreAvg1 = Math.ceil(roundt);
// var scoreAvg2 = Math.floor(roundt);
// document.write(roundt);
// document.write(scoreAvg);
// document.write(scoreAvg1);
// document.write(scoreAvg2);


// function pos_to_neg(num)
// {
// return -Math.abs(num);
// }

// console.log(pos_to_neg(15));

// chapter 31 - 34


// chapter 35 - 38

// var today = new Date();
// var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();
// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
// var dateTime = ("Current Time is: "+time+"<br>"+"Current Date is :"+date)
// document.write("Current Date and Time: "+"<br>");
// document.write(dateTime);

// var user = prompt("Enter your name?");
// var greet = "A Warm Welcome to you"+" "+user;
// alert(greet);

// var num1 = +prompt("Enter one number");
// var num2 = +prompt("Enter second number");
// var sum = num1+num2;
// document.write(sum)

// calculator
// function getHistory(){
// 	return document.getElementById("history-value").innerText;
// }
// function printHistory(num){
// 	document.getElementById("history-value").innerText=num;
// }
// function getOutput(){
// 	return document.getElementById("output-value").innerText;
// }
// function printOutput(num){
// 	if(num==""){
// 		document.getElementById("output-value").innerText=num;
// 	}
// 	else{
// 		document.getElementById("output-value").innerText=getFormattedNumber(num);
// 	}	
// }
// function getFormattedNumber(num){
// 	if(num=="-"){
// 		return "";
// 	}
// 	var n = Number(num);
// 	var value = n.toLocaleString("en");
// 	return value;
// }
// function reverseNumberFormat(num){
// 	return Number(num.replace(/,/g,''));
// }
// var operator = document.getElementsByClassName("operator");
// for(var i =0;i<operator.length;i++){
// 	operator[i].addEventListener('click',function(){
// 		if(this.id=="clear"){
// 			printHistory("");
// 			printOutput("");
// 		}
// 		else if(this.id=="backspace"){
// 			var output=reverseNumberFormat(getOutput()).toString();
// 			if(output){
// 				output= output.substr(0,output.length-1);
// 				printOutput(output);
// 			}
// 		}
// 		else{
// 			var output=getOutput();
// 			var history=getHistory();
// 			if(output==""&&history!=""){
// 				if(isNaN(history[history.length-1])){
// 					history= history.substr(0,history.length-1);
// 				}
// 			}
// 			if(output!="" || history!=""){
// 				output= output==""?output:reverseNumberFormat(output);
// 				history=history+output;
// 				if(this.id=="="){
// 					var result=eval(history);
// 					printOutput(result);
// 					printHistory("");
// 				}
// 				else{
// 					history=history+this.id;
// 					printHistory(history);
// 					printOutput("");
// 				}
// 			}
// 		}

// 	});
// }
// var number = document.getElementsByClassName("number");
// for(var i =0;i<number.length;i++){
// 	number[i].addEventListener('click',function(){
// 		var output=reverseNumberFormat(getOutput());
// 		if(output!=NaN){ //if output is a number
// 			output=output+this.id;
// 			printOutput(output);
// 		}
// 	});
// }

// Square of  number
// var squ = +prompt("Enter a number to find square root:");
// var sq = Math.sqrt(squ);
// document.write("Square of given number is: "+sq);

// function factorial(x) 
// { 
//   if (x === 0)
//  {
//     return 1;
//  }
//   return x * factorial(x-1);
// }
// document.write("The factorial of 5 is: "+factorial(5));

// function Hypotenuse(Base, Perpendicular){
//     return Math.sqrt(Math.pow(Base, 2) + Math.pow(Perpendicular, 2));
// }
// document.write("Hypotenuse of given base and perpendicular is: ")
// document.write(Hypotenuse(4, 3));

// var rectangleLength = parseInt(prompt("Enter length of rectangle:"));
// var rectangleWidth = parseInt(prompt("Enter width of rectangle:"));
// var areaOfRectangle = rectangleLength * rectangleWidth ;
// document.write("<br>"+"Area of rectangle is: " + areaOfRectangle);
// var circumferenceOfRectangle = 2 * (rectangleLength) + 2 * (rectangleWidth);
// document.write("<br>"+"Circumference of rectangle is: " + circumferenceOfRectangle);

// Write a JavaScript function that checks whether a passed string is palindrome or not? 
// function palindrome(str) {
//     var re = /[\W_]/g;
//     var lowRegStr = str.toLowerCase().replace(re, '');
//     var reverseStr = lowRegStr.split('').reverse().join(''); 
//     return reverseStr === lowRegStr;
// }
// palindrome("A man, a plan, a canal. Panama");

// var str = prompt("Enter any sentence");
// var res = str.toUpperCase();
// document.write(res);

// function titleCase(str) {
//     return str.toLowerCase().split(' ').map(function(word) {
//       return word.replace(word[0], word[0].toUpperCase());
//     }).join(' ');
// }
// titleCase("I'm a little tea pot");

// function find_longest_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(find_longest_word('Web Development Tutorial'));

// var a1 = +prompt("Enter 1st number");
// var b1 = +prompt("Enter 2nd number");
// var pw = Math.pow(a1, b1);
// document.write("The power of a given number is: "+pw);


// chapter 38 - 42

// LEAP YEAR

// var a11 = +prompt("Enter the length of 1st side of triangle");
// var a12 = +prompt("Enter the length of 2nd side of triangle");
// var a13 = +prompt("Enter the length of 3rd side of triangle");
// var S = (a11 + a12 + a13)/2;
// var areaOfTriangle = (S*(S-a11)*(S-a12)*(S-a13));
// document.write("The area of triangle is: "+areaOfTriangle);


//Markssheet
// var total_m = parseInt(300);
// var eng = +prompt("Enter English Marks");
// var urdu = +prompt("Enter Urdu Marks");
// var math = +prompt("Enter Maths Marks");
// var total_marks = eng + urdu + math;
// var percent = (total_marks*100/300);

// if (percent >= 80){
//     document.write("<br"+"MARKSSHEET"+"<br>"+"Total Marks "+" : "+total_m+"<br>"+"Marks Obtained "+" : "+total_marks+"<br>"+"Percentage"+" : "+percent+"%"+"<br>"+"Grade "+" : "+"A-One"+"<br>"+"Remarks "+" : "+"Excellent");
// }
// else if (percent >= 70){
//     document.write("MARKSSHEET"+"<br>"+"Total Marks "+" : "+total_m+"<br>"+"Marks Obtained "+" : "+total_marks+"<br>"+"Percentage"+" : "+percent+"%"+"<br>"+"Grade "+" : "+"A"+"<br>"+"Remarks "+" : "+"Good");
// }
// else if (percent >= 60){
//     document.write("MARKSSHEET"+"<br>"+"Total Marks "+" : "+total_m+"<br>"+"Marks Obtained "+" : "+total_marks+"<br>"+"Percentage"+" : "+percent+"%"+"<br>"+"Grade "+" : "+"B"+"<br>"+"Remarks "+" : "+"You need to improve");
// }
// else {
//     document.write("MARKSSHEET"+"<br>"+"Total Marks "+" : "+total_m+"<br>"+"Marks Obtained "+" : "+total_marks+"<br>"+"Percentage"+" : "+percent+"%"+"<br>"+"Grade "+" : "+"Fail"+"<br>"+"Remarks "+" : "+"Sorry");
// }


// // function myFunction() {
// //     var str2 = "Pakistani";
// //     var n2 = str2.indexOf(5);
// //     document.write("String: Pakistani");
// //     document.write(n2);
// //   }


// var para = "Please read this application and give me gratuity";
// switch(para) {
// case "ea" :
//     alert("There are two ae");
//     break;
// case "ea" :
//     alert("There is one ea");
//     break;
// case "io" :
//     alert("There is one io");
//     break;
// case "ui" :
//     alert("There is one ui");
//     break;
// default :
//     alert("There is no vowels in sentence!");
// }

// var city1 = prompt("Enter the distance of 1st city in km");
// var city2 = prompt("Enter the distance of 2nd city in km");
// convertToMeters();
// convertToFeet();
// convertToInches();
// convertToCentimeters();

// function convertToMeters() {
//     alert("The distance of 1st city in meters"+city1*1000);
//     alert("The distance of 2nd city in meters"+city2*1000);
// }
// function convertToFeet(){
//     alert("The distance of 1st city in feets"+city1*3280.84);
//     alert("The distance of 2nd city in feets"+city2*3280.84);
// }
// function convertToInches(){
//     alert("The distance of 1st city in inches"+city1*39370.1);
//     alert("The distance of 2nd city in inches"+city2*39370.1);
// }
// function convertToCentimeters(){
//     alert("The distance of 1st city in centimeters"+city1*100000);
//     alert("The distance of 2nd city in centimeters"+city2*100000);
// }


// CHAPTER 58-67

var mc = document.getElementById("").innerHTML();
alert(mc);

var d = document.getElementById("main-content");
var p = d.childNodes[1];
var contents = p.innerHTML;
document.write(contents);

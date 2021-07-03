// console.log('hello baby');
// // alert('hello this is shit');

// var b = 'smoothie';
// console.log(b);

// document.getElementById("someText").innerHTML = "Hey There"


// var someNumber = '45';
// console.log(someNumber);

// // var age = prompt('what is your age?');

// // document.getElementById("someage").innerHTML = "Read age is " + age;


// // Number in js

// var num1 = 10;
// // decrement num1 by 1 
// num1--;

// //increment num1 by 1
// num1++;
// num1++;
// console.log(num1);

// // divide
// console.log(num1 / 5)

// //increment/decrement by any number you want

// num1+=10;
// console.log(num1)

// /*Functions
// 1.create function
// 2. all the function
// */
// function func(){
//     console.log('this is a function')
// }


// //call
// func();

// //create a function that take in a name and says hello followed by your name

// function greeting(yourName){
//     // var name = prompt('What is your name>?');
//     var result = "Hello "+ yourName;
//     // console.log(result);
//     return result;
// }
// // var name1 = prompt('What is your name?');
// // console.log(greeting(name1));


// //function take in arguments

// //  how do we add 2 number together

// function sumNumbers(num1, num2){
//     var result = num1 + num2
//     console.log(result)
// }

// sumNumbers(5, 10);

// while loops

// var num = 0;
// while (num<100){
//     num+=10
//     console.log(num)
// }

// // for loop

// for (let num =0; num<100; num++){
//     console.log(num);
// }



// data types
// var yourAge = 18; //number
// let yourName = 'Bob';
// let name = {first: 'Janes', last:'Doe'}; //object
// let truth = false; //boolean
// let groceries = ['apple', 'banana', 'oranges'];
// let random;
// let nothing = null;

//strings in javascript (common methods)
// let fruit = 'banana; apple; orange; blackberry';
// let moreFruits = 'banana\napple';
// console.log(moreFruits)

// console.log(fruit.length);
// console.log(fruit.indexOf('ana'));
// console.log(fruit.slice(2,6));
// console.log(fruit.replace('ban','123'));
// console.log(fruit.toUpperCase());
// console.log(fruit.toLowerCase());
// console.log(fruit.charAt(2));
// console.log(fruit[2]);
// console.log(fruit.split(';')); //split by a semi-colon
// console.log(fruit.split()); // split by characters


//array
// let fruits = ['banana', 'apple', 'orange', 'pineapple']
// let fruits = new Array('banana', 'apple', 'orange', 'pineapple')

// // alert(fruits[2]);
// console.log(fruits[2]);

// fruits[0] = 'pear';

// console.log(fruits);

// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i])
// }

// //array common methods

// console.log('to string', fruits.toString());
// console.log(fruits.join(' *- '));
// console.log(fruits, fruits.pop(), fruits); //remove last item
// console.log(fruits.push('blackberries'), fruits); // append last items
// console.log(fruits[4]);

// fruits[fruits.length]='new fruit'
// console.log(fruits);

// fruits.shift();
// console.log(fruits);
// fruits.unshift('kiwi');
// console.log(fruits);


// let vegetables = ['asparagus', 'tomato', 'brocoli'];
// let allGroceries = fruits.concat(vegetables);
// console.log(allGroceries)
// console.log(allGroceries.slice(1,4));
// console.log(allGroceries.reverse());
// console.log(allGroceries.sort());


// let somenumber = [5, 10, 52,543654,6,54,7,24,5,34,6756,34];
// console.log(somenumber.sort(function(a,b){return a-b})); //sorting in descending order


// let emptyArray = new Array();
// for (let num =0; num <= 10000; num++){
//     emptyArray.push(num);
// }
// console.log(emptyArray);


//objects in javascript
// //dictionaries in Python

// let student = {first:"Rafeh"
//                 , last:"Qazi"
//                 , age:25
//                 , height: 170
//                 , studentInfo: function (){
//                     return this.first + '\n' + this.last + '\n' + this.age;
//                 }
//             }
// // console.log(student.first);
// // console.log(student.last);
// //student.first= 'noRafeh';
// console.log(student.first);
// student.age++;
// console.log(student.age);
// console.log(student.studentInfo());

// conditionals, control flows (if else)
// && and, || or, 


// var age = prompt('What is your age')
// if ((age >= 18) && (age <=35)){
//     status = 'target demo';
//     console.log(status);
// } else {
//     status = 'not my audience';
//     console.log(status);
// }

// switch statments in javascripts
// differenciate between weekday vs. weekend
// 0 --> Sunday, day 6 --> saturday

// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();

// today = yyyy + '.' + mm + '.' + dd;
// document.getElementById('someText').textContent = 'today is ' + today


// switch (5){
//     case 0:
//         text = 'weekend';
//         break;
//     case 5:
//         text = 'weekend';
//         break;
//     case 6:
//         text = 'weekend';
//         break;
//     default:
//         text = 'weekday';
//         break;

// }

// console.log(text)
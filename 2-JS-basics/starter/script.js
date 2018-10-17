/**************************
* Variables and data types
*/

/*
var firstName = 'Gabe';
console.log(firstName);

var lastName = 'Velasquez';
var age = 32;

var fullAge = true;
console.log(fullAge);

var job;
console.log(job);

job = 'Teacher';
console.log(job);

//variable naming rules
var _3years = 3;
var johnMark = 'John and Mark';
var if = 23;
*/


/******************************
 * Variable mutation and type coercion
 */

 /*
var firstName = 'Gabe';
var age = 28;

var job, isMarried;
job = 'programmer';
isMarried = true;

//javascript automatically converts objects so they can be used easier (type coercion)
console.log(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

// variable mutation

age = 'twenty eight';
job = 'driver';

alert(firstName + ' is a ' + age + ' year old ' + job + '. Is he married? ' + isMarried);

var lastName = prompt('What is his last name?');
console.log(firstName + ' ' + lastName);
*/

/****************************
 * Basic operators
 */
/*
var year, yearGabe, yearMark;
now = 2018;
year = 2018;
ageGabe = 32;
ageMark = 33;

//math operators
yearGabe = year - 32;
yearMark = year - 34;
console.log(yearGabe);
console.log(now + 2);
console.log(now*2);
console.log(now / 10);

//logical operators
var gabeOlder = ageGabe > ageMark;
console.log(gabeOlder);

//typeof operator
console.log(typeof gabeOlder);
console.log(typeof ageGabe);
console.log(typeof 'Gabe is older than Mark');
var x;
console.log(typeof x);
*/

/*****************
 * Operator precedence
 */
/*
var now = 2018;
var yearGabe = 1986;
var fullAge = 32;

//multiple operators
var isFullAge = now - yearGabe >= fullAge;
console.log(isFullAge);

//grouping
var ageGabe = now - yearGabe;
var ageMark = 35;
var average = (ageGabe + ageMark) / 2;
console.log(average);

//mulitple assignments
var x, y;
x = y = (3 + 5) * 4 - 6; //8 * 4 - 6 // 32 -6 // 26
console.log(x, y);

//more operators

x *= 2; // -> same as x = x * 2
console.log(x);*/

/*****
 * Coding challenge
 */
/*
var markHeight = prompt("Please enter Mark's Height");
var markMass = prompt("Please enter Mark's Mass");
var johnHeight = prompt("Please enter John's Height");
var johnMass = prompt("Please enter John's Mass");

var markBMI = markMass / (markHeight * markHeight);
var johnBMI = johnMass / (johnHeight * johnHeight);

var result = markBMI > johnBMI;
console.log(markBMI, johnBMI);
console.log("Is Mark's BMI higher than John's? ->" + result);
*/

/*
var firstName = 'Gabe';
var civilStatus = 'single';

if (civilStatus === 'married') {
    console.log(firstName + ' is married!');
}
else {
    console.log(firstName + ' will hopefully marry soon :)');
}

var isMarried = true;
if (isMarried) {
    console.log(firstName + ' is married!');
}
else {
    console.log(firstName + ' will hopefully marry soon :)');
}
*/

/*****
 * Truthy and Falsy values
 */

 //falsy values: undefined, null, 0, '', NaN
 //truthy values: NOT falsy values
/*
var height;
height = 23;

if(height || height === 0)
    console.log('variable is defined');
else
    console.log('variable has not been defined');

if(height == '23'){
    console.log('the == operator does type coercion!');
}*/

/*
var johnScores = 89 + 120 + 103;
var mikeScores = 116 + 94 + 123;
var maryScores = 97 + 134 + 105;

var johnAverage = johnScores / 3;
var mikeAverage = mikeScores / 3;
var maryAverage = maryScores / 3;

//functions

//i already know this

//function statements and expressions

//function declaration
// function whatDoYouDo(job, firstName){}
//so this is created on load and stored for use anywhere in the script

//function expression
//this is only created when it reaches this line in the code. this helps keep the scope clean of useless functions
var whatDoYouDo = function(job, firstName){

}

*/
/*
//arrays
var names = ['John','Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);


//different data types
var john = ['John', 'Smith',1990, 'teacher', false];

john.push('blue'); //add to the back of the array
console.log(john);
john.unshift('Mr.'); //add to the front of the array
console.log(john); 
john.pop(); //take off the last element
console.log(john);
john.shift(); //take off the first element
console.log(john);
//i know about arrays already....

console.log(john.indexOf(23));

var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';

console.log(isDesigner);
*/
/*
var billAmounts = [124, 48, 268];
console.log(billAmounts);

var calcTip = function(amount){
    if(amount < 50)
        return (amount * .2);
    else if(amount >= 50 && amount <= 200)
        return (amount * .15);
    else if(amount > 200)
        return (amount * .10);
    else
        return -1;
};

var tipAmounts = [];
var finalAmounts = [];

tipAmounts.push(calcTip(billAmounts[0]));
tipAmounts.push(calcTip(billAmounts[1]));
tipAmounts.push(calcTip(billAmounts[2]));

console.log(tipAmounts);

finalAmounts.push(billAmounts[0] + calcTip(billAmounts[0]));
finalAmounts.push(billAmounts[1] + calcTip(billAmounts[1]));
finalAmounts.push(billAmounts[2] + calcTip(billAmounts[2]));

console.log(finalAmounts);
*/


//objects
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane','Mark','Bob','Emily'],
    job: 'teacher',
    isMarried: false
};

console.log(john);
console.log(john.firstName);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
console.log(john);

var jane = new Object();

jane.name = 'Jane';
jane.birthYear = 1969;
jane['lastName'] = 'Smith';

console.log(jane);
*/

//objects and methods
/*
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane','Mark','Bob','Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function(){
        return 2018 - this.birthYear;
    }
};

console.log(john.calcAge());
*/

//coding challenge 4
/*
var Mark = {
    fullName: 'Mark Kehoe',
    mass: 78,
    height: 1.69,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};

var John = {
    fullName: 'John Doe',
    mass: 92,
    height: 1.95,
    calcBMI: function(){
        this.bmi = this.mass / (this.height * this.height);
        return this.bmi;
    }
};
Mark.calcBMI();
John.calcBMI();

console.log(John, Mark);

if(Mark.bmi > John.bmi){
    console.log(Mark.fullName + ' has the higher BMI with ' + Mark.bmi);
}else if(Mark.bmi < John.bmi){
    console.log(John.fullName + ' has the higher BMI with ' + John.bmi);
}else{
    console.log(Mark.fullName + ' and ' + John.fullName + ' have the same BMI');
}
*/

//loops and iteration
/*
for(var i = 0; i < 10; i++){
    console.log(i);
}
*/
//i know loops already....

//continue statement > breaks the iteration of the loop, but continues the loop
//break statement-> breaks out of the entire loop
/*
var john = ['john', 'smith', 1990, 'designer', false, 'blue'];

for(var i=0; i < john.length; i++){
    if(typeof john[i] !== 'string') continue;
    console.log(john[i]);
}

for(var i = john.length-1; i >= 0; i--){
    console.log(john[i]);
}*/

//coding challenge 5


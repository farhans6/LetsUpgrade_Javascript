// Assignment 3
// Q1. Check whether the nomber is even or not and print the output on console.

var num = window.prompt(`Enter a number.`);
console.log(num%2==0?`The number entered is ${num} and the number is Even.`:`The number entered is ${num} and the number is Odd.`); 

// Q2. Print OS name with version

var ver = window.prompt(`Eneter OS name with Version. `);
console.log(`The OS name and the Version is ${ver}`);


// Q3. Display Grade using Input.

let ma = prompt(`Enter Marks.`);
if (ma >=51 && ma<=100) {
    console.log(`Marks are ${ma} and Grade is A`);
    
} else if (ma >= 0 && ma <=50) {
    console.log(`Marks are ${ma} and Grade is B`);
    
}
else {
    console.log(`No Grade is obtained`);
}

// conditioanal statememt
let mark = prompt(`Enter Marks.`);
console.log(mark >= 51?`The Marks are ${mark} and 
Grade is A`:`The Marks are ${mark} and Grade is B`);



// switch(marks){
//     case (100):
//         console.log(`Marks are ${marks} and Grade is A`);
//         break;
//     case (50):
//         console.log(`Marks are ${marks} and Grade is B`);
//         break;
//     default:
//         console.log(`No grade is obtained`);    
//         break;
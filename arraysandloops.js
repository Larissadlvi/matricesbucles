//Exercise #1 
/* Exercise #1
Part 1
There are three people waiting for the bank. Their names, in order, are Sofia, David, and Juan. Create an array that has these three names in order.*/

var people = ["Sofia", "David", "Juan"];
console.log(people);
/*
Part 2
Two more people get added to the back of the line - Sara and Augustin. The first person in line is called to the teller. What does the queue look like? */
people.splice(0,1);
console.log(people); //Sofia goes to the teller

people.splice (0,2); //delete david and juan
console.log(people)

people.unshift("Augustin"); //add augustin
console.log(people);

people.unshift("Sara"); //add sara
console.log(people);

people.unshift("Juan"); //add juan
console.log(people);

people.unshift("David"); //add david
console.log(people);


/*Part 3
It turns out David was saving a spot for his friend Renata. She shows up and goes behind him in the line. One more person (Elena) shows up and goes to the end of the line. What does the queue look like?*/

people.unshift("Renata"); //add renata
console.log(people);

people.splice(1,1); //Remove david
console.log(people);

people.unshift("David"); //add renata
console.log(people);

people.push("Elena"); //add elena to the back
console.log(people);

//Exercise #2
// Write a JavaScript program to construct the following pattern, using a nested for loop. padStart rellena la cadena actual con una cadena dada (repetida eventualmente) de modo que la cadena resultante alcance una longitud dada

function Pyramid(number, symbol) {
    for (let x = 0; x <= number; x++) {
        let pyramid = " ".padStart(x,symbol); 
        console.log(pyramid); 
    }
}

Pyramid(6, "*"); 

//Exercise #3
/* Write while loops to do the following:

– Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
as long as xValue remains positive. */ //PENDIENTE


/*
- Print all the odd numbers between 1 - 100.
*/
console.log(Array.from({ length: 50 }, (element, index) => (index * 2) + 1).join(' '))

/*
- Write a method with a while loop to print 1 through n in square brackets. */

//For example, if n = 6 print [1] [2] [3] [4] [5] [6]

n = 5;
x = 0;

while (x <= n) {
    x ++;
    var result = x;
    result = '[' + result + ']'; 
    console.log(result);
}



/*
- Write a method with a while loop that computes the sum of first n positive integers: 
sum = 1 + 2 + 3 + … + n
Examples:
n = 5 sum = 15
n = 19 sum = 190
*/

let g = 5;
let sum = 1+2+3+g;
let i = 1;

while( i <= g) {
    sum += i;
    i++;
}

console.log(sum);
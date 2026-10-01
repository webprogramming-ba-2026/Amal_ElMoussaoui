import * as readline from "readline-sync"

let name: string = readline.question("What's your name? ");

console.log(`Hello ${name} !`);

// let age: number = readline.questionInt("What's your age? ");
// console.log(`You're ${age}? That's old!`);

let age: number |undefined = undefined;

do {

    age = Number(readline.question("Whats your age: "));

    if (isNaN(age)) {

        console.log("Input valid number, please");
    }
} while (isNaN(age));

let height: number = readline.questionFloat("What's your height? ")

let weight: number = readline.questionInt("What is your weight? ")

// BMI = gewicht / lengte

console.log(weight / (height*weight))
console.log(weight / Math.pow(height, 2))

// console.log('Your BMI is ${bmi.toFixed(2)}')


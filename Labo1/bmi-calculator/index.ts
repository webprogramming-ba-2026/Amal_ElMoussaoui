import * as readline from 'readline-sync';


let height: number = readline.questionFloat("What's your height? ")

let weight: number = readline.questionInt("What is your weight? ")

console.log(weight / (height*height))

export {}
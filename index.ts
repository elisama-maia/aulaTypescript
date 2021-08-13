// Import stylesheets
import './style.css';
import {Greeter} from './greeter';

/*
console.log("Olá, Ts!");

alert('teste'); 

for(let i=0; i<10; i++){
  if(i % 2 == 0){
    console.log(i);
  }
} 
*/

// Write TypeScript code!

let title: string = "MeuApp";
let paragraph: string = "Blablabla...";

let counter: number = 0;

let intervalId = setInterval(() => {
  counter = counter + 1;
  const appCounter: HTMLElement = document.getElementById('app.counter');
  appCounter.innerHTML = counter + '';
}, 1000);

const btn = document.getElementById('app.btn');
btn.addEventListener("click", alertMethod);

function alertMethod(this: HTMLElement, ev: Event) {
  alert('Alertando pelo Typescript');
}

const appTitle: HTMLElement = document.getElementById('app.title');
appTitle.innerHTML = title;

const appParagraph: HTMLElement = document.getElementById('app.paragraph');
appParagraph.innerHTML = paragraph;

let greeter = new Greeter("Typescript")

const appGreeter: HTMLElement = document.getElementById('app.paragraph');
appGreeter.innerHTML = greeter.getGreeting();
//`<h1>${title}</h1>
//<p>${paragraph}</h1>`;
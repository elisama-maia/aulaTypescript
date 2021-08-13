// Import stylesheets
import './style.css';
import {Person} from './person';

// Write TypeScript code!
let person = new Person("Elisama", "Dos Santos", "Maia", 1995);

const appPerson: HTMLElement = document.getElementById('app.personName');
appPerson.innerHTML = person.getFullName();

const appPersonAge: HTMLElement = document.getElementById('app.personAge');
appPersonAge.innerHTML = person.getBirthdayYear();
export class Person {

  firstname: sring;
  middlename: string;
  lastname: string;
  age: number;

  constructor(firstname: string, middlename: string, lastname: string, age: number) {
    this.firstname = firstname;
    this.middlename = middlename;
    this.lastname = lastname;
    this.age = age;
  }

  getFullName() {
    return `Olá, ${this.firstname} ${this.middlename} ${this.lastname}`;
  }

  getBirthdayYear() {
    let currentTime = new Date();
    this.age = currentTime.getFullYear() - this.age;
    return `${this.age} anos`
  }
}
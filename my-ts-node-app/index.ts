/** let myName : string = 'Tino';

let numberNum : number = 10;

let isStudent: boolean = true */

//import console = require("console")


type Person = {
    name: string
    age: number
    isStudent: boolean 
    address?: Address
} 

type Address = {
    street: string 
    city: string
    country: string
}

let person: Person = {
    name : 'Tino',
    age: 21,
    isStudent: false ,
    
}


let person1: Person = {
    name : 'Tino',
    age: 21,
    isStudent: true ,
    address: {
        street: '123 Avenue',
        city: 'London',
        country: 'UK'
    }
}


function displayInfo(person1: Person): void {
    console.log(`${person1.name} lives at ${person1.address?.street}`);
}

displayInfo(person)


//let people: Person[] = [person, person1]

let people: Array<Person> = [person, person1]


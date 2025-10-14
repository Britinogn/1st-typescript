function greet(name: string): string{
    return `Hello , ${name}!!`
}
greet ('World');

console.log(greet);


// function greets(namess) {
//     return "Hello , ".concat(namess, "!");
// }

const message = greet ('World')

console.log(message);


let isActive: boolean = true;

console.log(isActive);


const names: string [] = [];
names.push('Tino');
console.log(names);

// A tuple is a typed array with a pre-defined length and types for each index.

let ourTuple: [number, boolean, string];

ourTuple = [5, true,'Tino loves to code']

const car: {type: string , mileage: number} = {
    type: 'Benz',
    mileage: 0
}

car.mileage = 2000;

//An enum is a special "class" that represents a group of constants (unchangeable variables).

enum statusCodes{
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}

console.log(statusCodes.NotFound);

enum CardinalDirections {
  North = 'North',
  East = "East",
  South = "South",
  West = "West"
};
// logs "North"
console.log(CardinalDirections.North);
// logs "West"
console.log(CardinalDirections.West);

interface Rectangle {
    height: number,
    width: number;
}

interface ColoredRectangle extends Rectangle {
    color: String
}

const ColoredRectangle: ColoredRectangle = {
    height: 20,
    width:10,
    color: 'red'
}

//TypeScript Classes

class Person { name: String | undefined;}

const person = new Person();

person.name = 'Tino'

console.log('person');

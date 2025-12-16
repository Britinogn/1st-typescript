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

// let people: Array<Person> = [person, person1]



type User = {
    id: number
    username: string 
    role:  'guest' | 'member' | 'admin' //'contributor'
}

//type UserRole = 'guest' | 'member' | 'admin'

// type UpdatedUser = {
//     id? : number
//     username?:string
//     role?:  'guest' | 'member' | 'admin'
// }

type UpdatedUser = Partial<User>
let nextUserId = 1



const users: User[]= [
    {id:nextUserId++ ,username: 'billy' , role:'admin'},
    {id:nextUserId++ ,username: 'tino' , role:'member'},
    //{id:nextUserId++ ,username: 'bright' , role:'guest'},
]

// function fetchUserDetail(username: string): User{
//     const user = users.find(user => user.username === username)
//     if (!user) {
//         throw new Error (`User with username ${username} not found`)
//     }

//     return user
// }

function updateUser(id: number , update: UpdatedUser){
    const user = users.find(user => user.id === id)
    if (!user) {
        throw new Error (`User with username ${id} not found`)
    }
    
    Object.assign(user, update)
}


function addNewUser(newUser: Omit<User, 'id'| 'user'> ): User | undefined{
    // const user = users.find(user => user.id === nextUserId )
    // if (!user) {
    //     throw new Error (`User with id ${nextUserId} not found`)
    // }
    // return user;

    // Object.assign(user, update)

    const user: User = {
        id: nextUserId++,
        ...newUser
    }

    users.push(user)
    return user

}

addNewUser({username: 'bright' , role:'guest'},)
//updateUser(2, {role: 'guest'})

console.log(users);


// let userRole = 'admin';

// let value:any = 1
// value.toUpperCase()
// value 


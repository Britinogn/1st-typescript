//import console = require("console")

type Pizza = {
    id: number
    name: string 
    price: number
}

type Order  = {
    id: number
    pizza: Pizza
    status: 'ordered' | 'completed'
}


let cashInRegister = 100
let nextOrderId = 1
let nextPizzaId = 1
const orderQueue: Order[] = []

const menu: Pizza[] = [
    {id:nextPizzaId++ ,name: 'Veggie', price: 35},
    {id:nextPizzaId++, name: 'Pepperoni', price: 50},
    {id:nextPizzaId++, name: 'Tomatoes', price: 15}, 
]



// function addNewPizza(pizzaObj: Pizza): void{
//     pizzaObj.id = nextPizzaId++
//     menu.push(pizzaObj)
// }


function addNewPizza(pizzaObj: Omit<Pizza, 'id'> ): Pizza | undefined{
    //pizzaObj.id = nextPizzaId++

    
    const newPiza: Pizza = {
        id: nextPizzaId++,
        ...pizzaObj
    }


    menu.push(newPiza)
    return newPiza
}

function placeOrder(pizzaName: string): Order | undefined{
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName )
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`)
        return;
    }
    cashInRegister == selectedPizza.price
    const newOrder: Order = {
        id: nextOrderId++, 
        pizza: selectedPizza, 
        status: 'ordered'
    }
    orderQueue.push(newOrder)
    return newOrder;
} 

function completedOrder (orderId: number): Order | undefined{
    const order = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.error(`${orderId} was not found in the OrderQueue`)
        return
    }
    order.status = 'completed'
    return order
}

function getPizzaDetail(identifier:string | number): Pizza | undefined{

    if (typeof identifier === 'string') {
        return menu.find(pizza => pizza.name.toLowerCase() === identifier.toLowerCase())
    } else if (typeof identifier === 'number'){ 
        return menu.find(pizza => pizza.id === identifier)
    }else {
        throw new TypeError('Parameter `identifier` must be either a string or a number ' )
    }
}

addNewPizza({ name: 'Chicken Bacon Ranch', price: 12});
addNewPizza({ name: 'Spicy Sauasage', price: 22});
addNewPizza({ name: 'Egg Sauasage', price: 22});

placeOrder('Spicy Sauasage');
placeOrder('Chicken Bacon Ranch');
getPizzaDetail('Egg Sauasage')
completedOrder(1);

console.log('Menu:', menu)
// console.log('Cash in register: ', cashInRegister)
// console.log('Order Queue:', orderQueue)
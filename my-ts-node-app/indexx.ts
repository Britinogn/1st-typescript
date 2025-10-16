//import console = require("console")

type Pizza = {
    name: string 
    price: number
}

type Order  = {
    id: number
    pizza: Pizza
    status: string
}


const menu = [
    {name: 'Veggie', price: 35},
    {name: 'Pepperoni', price: 50},
    {name: 'Tomatoes', price: 15}, 
]

let cashInRegister = 100
let nextOrderId = 1
const orderQueue: Order[] = []

function addNewPizza(pizzaObj: Pizza){
    menu.push(pizzaObj)
}

function placeOrder(pizzaName: string){
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

function completedOrder (orderId: number){
    const order = orderQueue.find(order => order.id === orderId)
    if (!order) {
        console.error(`${orderId} was not found in the OrderQueue`)
        return
    }
    order.status = 'completed'
    return order
}

addNewPizza({name: 'Chicken Bacon Ranch', price: 12});
addNewPizza({name: 'Spicy Sauasage', price: 22});


placeOrder('Spicy Sauasage');
placeOrder('Chicken Bacon Ranch');
completedOrder(1);

console.log('Menu:', menu)
console.log('Cash in register: ', cashInRegister)
console.log('Order Queue:', orderQueue)
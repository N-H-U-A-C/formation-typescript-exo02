import { calculateTotal, createOrder } from "./domain/order.js";
import OrderManager from "./domain/orderManager.js";
import { Status } from "./domain/status.js";
// orderManager
const orderManager = new OrderManager;
// customers
const customer1 = {
    id: 1,
    name: "customer1",
    email: "email1",
};
const customer2 = {
    id: 2,
    name: "customer2",
    email: "email2",
};
// products
const product1 = {
    id: 1,
    name: "product1",
    price: 1.01,
    stock: 5,
};
const product2 = {
    id: 2,
    name: "product2",
    price: 51,
    stock: 6,
};
const product3 = {
    id: 3,
    name: "product3",
    price: 10,
    stock: 16,
};
const product4 = {
    id: 4,
    name: "product4",
    price: 12,
    stock: 11,
};
// orderItems
const orderItem1 = {
    product: product1,
    quantity: 2,
};
const orderItem2 = {
    product: product2,
    quantity: 1,
};
const orderItem3 = {
    product: product3,
    quantity: 6,
};
const orderItem4 = {
    product: product4,
    quantity: 4,
};
// orders
const order1 = createOrder(customer1, [orderItem1]);
const order2 = createOrder(customer1, [orderItem2]);
const order3 = createOrder(customer2, [orderItem3, orderItem4]);
orderManager.addOrder(order1);
orderManager.addOrder(order2);
orderManager.addOrder(order3);
// test
console.log(orderManager.getOrderById(1));
orderManager.updateOrderStatus(2, Status.Shipped);
console.log(orderManager.listOrdersByStatus(Status.Shipped));
console.log(calculateTotal(order3));

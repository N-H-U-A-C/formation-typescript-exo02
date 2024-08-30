import Customer from "./domain/customer.js";
import { calculateTotal, createOrder, Order } from "./domain/order.js";
import OrderItem from "./domain/orderItem.js";
import OrderManager from "./domain/orderManager.js";
import Product from "./domain/product.js";
import { Status } from "./domain/status.js";

// orderManager
const orderManager: OrderManager = new OrderManager;

// customers
const customer1: Customer = {
    id: 1,
    name: "customer1",
    email: "email1",
}
const customer2: Customer = {
    id: 2,
    name: "customer2",
    email: "email2",
}

// products
const product1: Product = {
    id: 1,
    name: "product1",
    price: 1.01,
    stock: 5,
}
const product2: Product = {
    id: 2,
    name: "product2",
    price: 51,
    stock: 6,
}
const product3: Product = {
    id: 3,
    name: "product3",
    price: 10,
    stock: 16,
}
const product4: Product = {
    id: 4,
    name: "product4",
    price: 12,
    stock: 11,
}

// orderItems
const orderItem1: OrderItem = {
    product: product1,
    quantity: 2,
}
const orderItem2: OrderItem = {
    product: product2,
    quantity: 1,
}
const orderItem3: OrderItem = {
    product: product3,
    quantity: 6,
}
const orderItem4: OrderItem = {
    product: product4,
    quantity: 4,
}

// orders
const order1: Order = createOrder(customer1, [orderItem1]);
const order2: Order = createOrder(customer1, [orderItem2]);
const order3: Order = createOrder(customer2, [orderItem3, orderItem4]);

orderManager.addOrder(order1);
orderManager.addOrder(order2);
orderManager.addOrder(order3);

// test
console.log(orderManager.getOrderById(1));
orderManager.updateOrderStatus(2, Status.Shipped);
console.log(orderManager.listOrdersByStatus(Status.Shipped));
console.log(calculateTotal(order3));



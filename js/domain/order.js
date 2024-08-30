import { Status } from "./status.js";
let count = 0;
export function createOrder(customer, items) {
    const order = {
        id: ++count,
        customer: customer,
        items: items,
        status: Status.Pending
    };
    return order;
}
export function calculateTotal(order) {
    return order.items.reduce((acc, current) => acc = current.product.price * current.quantity, 0);
}

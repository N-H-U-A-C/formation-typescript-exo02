import Customer from "./customer.js";
import OrderItem from "./orderItem.js";
import { Status } from "./status.js";

let count: number = 0;

export interface Order {
    readonly id: number;
    customer: Customer;
    items: OrderItem[];
    status: Status;
}

export function createOrder(customer: Customer, items: OrderItem[]): Order {
    const order: Order = {
        id: ++count,
        customer: customer,
        items: items,
        status: Status.Pending
    }
    return order;
}

export function calculateTotal(order: Order): number {
    return order.items.reduce((acc, current) => acc = current.product.price * current.quantity, 0);
}

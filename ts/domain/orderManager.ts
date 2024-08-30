import { Order } from "./order";
import { Status } from "./status";

export default class OrderManager {
    private orders: Order[];

    constructor() {
        this.orders = [];
    };

    addOrder(order: Order): void {
        this.orders.push(order);
    }

    getOrderById(id: number): Order {
        return this.orders.find((element) => element.id === id);
    }

    updateOrderStatus(id: number, status: Status): void {
        this.getOrderById(id).status = status;
    }

    listOrdersByStatus(status: Status): Order[] {
        return this.orders.filter((element) => element.status === status);
    }
}
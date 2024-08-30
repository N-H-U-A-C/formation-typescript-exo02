export default class OrderManager {
    constructor() {
        this.orders = [];
    }
    ;
    addOrder(order) {
        this.orders.push(order);
    }
    getOrderById(id) {
        return this.orders.find((element) => element.id === id);
    }
    updateOrderStatus(id, status) {
        this.getOrderById(id).status = status;
    }
    listOrdersByStatus(status) {
        return this.orders.filter((element) => element.status === status);
    }
}

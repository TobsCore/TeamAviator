import * as _ from "lodash";
import { Order } from "~/model/warehouse/order";
import { Part } from "~/model/warehouse/part";

export class Warehouse {
    name: string;
    description: string;
    technician: string;
    parts: Array<Part>;
    orders: Array<Order>;

    constructor(warehouse?: {
        name: string, description: string, technician: string, parts: Array<Part>, orders: Array<Order>
    }) {
        if (warehouse) {
            _.assignIn(this, warehouse);
        }
    }
}

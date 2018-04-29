import * as _ from "lodash";
import { Part } from "~/model/warehouse/part";

export class Order {
    date: number; // timestamp in epochMilli as 64bit integer, if you don't know what epochMilli is use google.
    parts: Array<Part>;
    status: string;

    constructor(order?: { date: number, parts: Array<Part>, status: string }) {
        if (order) {
            _.assignIn(this, order);
        }
    }
}

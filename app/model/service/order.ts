import * as _ from "lodash";
import { Part } from "~/model/warehouse/part";

export class ServiceOrder {
    date: number; // timestamp in epochMilli as 64bit integer, if you don't know what epochMilli is use google.
    technican: string;
    customer: string;
    serviceProduct: string;
    parts: Array<Part>;
    startTime: number;
    endTime: number;

    constructor(order?: {
        date: number, technican: string, customer: string, serviceProduct: string, parts: Array<Part>,
        startTime: number, endTime: number
    }) {
        if (order) {
            _.assignIn(this, order);
        }
    }
}

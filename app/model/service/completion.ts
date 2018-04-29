import * as _ from "lodash";
import { Part } from "~/model/warehouse/part";

export class ServiceCompletion {
    date: number; // timestamp in epochMilli as 64bit integer, if you don't know what epochMilli is use google.
    technician: string;
    serviceProduct: string;
    parts: Array<Part>;
    startTime: number;
    endTime: number;

    constructor(completion?: {
        date: number, technician: string, serviceProduct: string, parts: Array<Part>,
        startTime: number, endTime: number
    }) {
        if (completion) {
            _.assignIn(this, completion);
        }
    }
}

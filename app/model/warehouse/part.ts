import * as _ from "lodash";

export class Part {
    number: string;
    name: string;
    unit: string;

    constructor(part?: { number: string, name: string, unit: string }) {
        if (part) {
            _.assignIn(this, part);
        }
    }
}

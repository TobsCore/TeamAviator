import * as _ from "lodash";

export class ServiceRequest {
    customer: string;
    serviceProducts: Array<string>;
    type: string;
    description: string;

    constructor(request?: { customer: string, serviceProducts: Array<string>, type: string, description: string }) {
        if (request) {
            _.assignIn(this, request);
        }
    }
}

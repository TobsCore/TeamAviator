import * as _ from "lodash";

export class Note {
    title: string;
    description: string;
    date: number; // timestamp in epochMilli as 64bit integer, if you don't know what epochMilli is use google.
    status: string;

    constructor(note?: { title: string, description: string, date: number, status: string }) {
        if (note) {
            _.assignIn(this, note);
        }
    }
}

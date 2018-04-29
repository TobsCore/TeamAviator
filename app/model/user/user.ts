import * as EmailValidator from "email-validator";
import * as _ from "lodash";

export class User {
    email: string;
    password: string;

    constructor(user?: { email: string, password: string }) {
        if (user) {
            _.assignIn(this, user);
        }
    }

    isValidEmail() {
        return EmailValidator.validate(this.email);
    }
}

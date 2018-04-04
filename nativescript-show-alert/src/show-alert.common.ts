import {
  Observable
} from 'tns-core-modules/data/observable';
import * as app from 'tns-core-modules/application';
import * as dialogs from 'tns-core-modules/ui/dialogs';

export class Common extends Observable {
  public message: string;

  constructor() {
    super();
    this.message = Utils.SUCCESS_MSG();
  }

}

export class Utils {
  public static SUCCESS_MSG(): string {
    let msg = `This plugin is showing an alert on ${app.android ? 'Android' : 'iOS'}.`;
    return msg;
  }
}
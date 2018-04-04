import { Common } from './show-alert.common';
import * as dialogs from 'tns-core-modules/ui/dialogs';


export class ShowAlert extends Common {
    showAlert(): void {
        dialogs.alert(`${this.message}`).then(() => console.log(`Dialog closed.`));
      }
}

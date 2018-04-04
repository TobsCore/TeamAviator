import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  NgZone
} from "@angular/core";
import {
  Grocery
} from "../../shared/grocery/grocery";
import {
  GroceryListService
} from "../../shared/grocery/grocery-list.service";
import {
  TextField
} from "ui/text-field";
import * as SocialShare from "nativescript-social-share";
import * as ShowAlert from "nativescript-show-alert";
import {
  TNSFontIconService
} from 'nativescript-ng2-fonticon';
import {
  prompt,
  PromptResult,
  inputType
} from "ui/dialogs";



@Component({
  selector: "list",
  moduleId: module.id,
  templateUrl: "./list.html",
  styleUrls: ["./list-common.css", "./list.css"],
  providers: [GroceryListService]
})
export class ListComponent implements OnInit {
  groceryList: Array < Grocery > = [];
  grocery = "";
  isLoading = true;
  listLoaded = false;
  @ViewChild("groceryTextField") groceryTextField: ElementRef;

  constructor(private groceryListService: GroceryListService, private zone: NgZone) {}

  ngOnInit() {
    this.isLoading = true;
    this.groceryListService.load()
      .subscribe(loadedGroceries => {
        loadedGroceries.forEach((groceryObject) => {
          this.groceryList.unshift(groceryObject);
        });
        this.isLoading = false;
        this.listLoaded = true;
      });
  }

  add() {
    if (this.grocery.trim() === "") {
      alert("Enter a grocery item");
      return;
    }

    // Dismiss the keyboard
    let textField = < TextField > this.groceryTextField.nativeElement;
    textField.dismissSoftInput();

    this.groceryListService.add(this.grocery)
      .subscribe(
        groceryObject => {
          this.groceryList.unshift(groceryObject);
          this.grocery = "";
        },
        () => {
          alert({
            message: "An error occurred while adding an item to your list.",
            okButtonText: "OK"
          });
          this.grocery = "";
        }
      )
  }

showAlert() {
  var showy: ShowAlert.ShowAlert = new ShowAlert.ShowAlert();
  showy.showAlert();
}

  delete(grocery: Grocery) {
    this.groceryListService.delete(grocery.id)
      .subscribe(() => {
        // Running the array splice in a zone ensures that change detection gets triggered.
        this.zone.run(() => {
          let index = this.groceryList.indexOf(grocery);
          this.groceryList.splice(index, 1);
        });
      });
  }

  clear() {
    for (let grocery of this.groceryList) {
      this.delete(grocery)
    }
  }

  edit(grocery: Grocery) {
    let options = {
      title: "Change your item",
      defaultText: grocery.name,
      inputType: inputType.text,
      okButtonText: "Ok",
      cancelButtonText: "Cancel"
    };

    prompt(options).then((result: PromptResult) => {
      grocery.name = result.text;
    });
  }

  share() {
    let listString = this.groceryList
      .map(grocery => grocery.name)
      .join(", ")
      .trim();
    SocialShare.shareText(listString);
  }

}
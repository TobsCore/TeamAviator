import { EventData, View } from "ui/core/view";
import { NavigatedData, Page } from "ui/page";
import { Item } from "../shared/appointment";

export function onNavigatingTo(args: NavigatedData) {
    const page = args.object as Page;
    const item = args.context as Item;
    page.bindingContext = item;
}

export function onBackButtonTap(args: EventData) {
    const view = args.object as View;
    const page = view.page as Page;

    page.frame.goBack();
}

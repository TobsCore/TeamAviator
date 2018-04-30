"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var appointments_view_model_1 = require("./appointments-view-model");
function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = new appointments_view_model_1.HomeViewModel();
}
exports.onNavigatingTo = onNavigatingTo;
function onItemTap(args) {
    var view = args.view;
    var page = view.page;
    var tappedItem = view.bindingContext;
    page.frame.navigate({
        moduleName: "home/home-item-detail/home-item-detail-page",
        context: tappedItem,
        animated: true,
        transition: {
            name: "slide",
            duration: 200,
            curve: "ease"
        }
    });
}
exports.onItemTap = onItemTap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwb2ludG1lbnRzLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHBvaW50bWVudHMtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUlBLHFFQUEwRDtBQUcxRCx3QkFBK0IsSUFBbUI7SUFDOUMsSUFBTSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUMvQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksdUNBQWEsRUFBRSxDQUFDO0FBQzlDLENBQUM7QUFIRCx3Q0FHQztBQUVELG1CQUEwQixJQUFtQjtJQUN6QyxJQUFNLElBQUksR0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQzdCLElBQU0sSUFBSSxHQUFTLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDN0IsSUFBTSxVQUFVLEdBQVMsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUU3QyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQztRQUNoQixVQUFVLEVBQUUsNkNBQTZDO1FBQ3pELE9BQU8sRUFBRSxVQUFVO1FBQ25CLFFBQVEsRUFBRSxJQUFJO1FBQ2QsVUFBVSxFQUFFO1lBQ1IsSUFBSSxFQUFFLE9BQU87WUFDYixRQUFRLEVBQUUsR0FBRztZQUNiLEtBQUssRUFBRSxNQUFNO1NBQ2hCO0tBQ0osQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQWZELDhCQWVDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjtcclxuaW1wb3J0IHsgSXRlbUV2ZW50RGF0YSB9IGZyb20gXCJ1aS9saXN0LXZpZXdcIjtcclxuaW1wb3J0IHsgTmF2aWdhdGVkRGF0YSwgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcblxyXG5pbXBvcnQgeyBIb21lVmlld01vZGVsIH0gZnJvbSBcIi4vYXBwb2ludG1lbnRzLXZpZXctbW9kZWxcIjtcclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL3NoYXJlZC9hcHBvaW50bWVudFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3M6IE5hdmlnYXRlZERhdGEpIHtcclxuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcclxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgSG9tZVZpZXdNb2RlbCgpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25JdGVtVGFwKGFyZ3M6IEl0ZW1FdmVudERhdGEpIHtcclxuICAgIGNvbnN0IHZpZXcgPSA8Vmlldz5hcmdzLnZpZXc7XHJcbiAgICBjb25zdCBwYWdlID0gPFBhZ2U+dmlldy5wYWdlO1xyXG4gICAgY29uc3QgdGFwcGVkSXRlbSA9IDxJdGVtPnZpZXcuYmluZGluZ0NvbnRleHQ7XHJcblxyXG4gICAgcGFnZS5mcmFtZS5uYXZpZ2F0ZSh7XHJcbiAgICAgICAgbW9kdWxlTmFtZTogXCJob21lL2hvbWUtaXRlbS1kZXRhaWwvaG9tZS1pdGVtLWRldGFpbC1wYWdlXCIsXHJcbiAgICAgICAgY29udGV4dDogdGFwcGVkSXRlbSxcclxuICAgICAgICBhbmltYXRlZDogdHJ1ZSxcclxuICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwic2xpZGVcIixcclxuICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcclxuICAgICAgICAgICAgY3VydmU6IFwiZWFzZVwiXHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuIl19
// Angular imports
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";

// NativeScript imports
import { Color } from "color";
import { isAndroid } from "platform";
import { View } from "ui/core/view";
import { Page } from "ui/page";

// App imports
import { User } from "./user/user";
import { UserService } from "./user/user.service";

@Component({
    selector: "LoginComponent",
    moduleId: module.id,
    providers: [UserService],
    templateUrl: "./login.component.html",
    styleUrls: ["./login.component.scss"]
})



export class LoginComponent implements OnInit {

    user: User;
    appSettings = require("application-settings");
    Observable = require("tns-core-modules/data/observable").Observable;

    @ViewChild("container") container: ElementRef;
    @ViewChild("email") email: ElementRef;
    @ViewChild("password") password: ElementRef;

    constructor(private router: Router, private userService: UserService, private page: Page) {
        this.user = new User();
        this.user.email = "nils@holgersson.se";
        this.user.password = "Selma Lagerlöf";
    }

    ngOnInit() {
        const userPassword = this.appSettings.getString(this.user.email, "none")
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_uilab";
        if (userPassword == "none") {
        } else {
            const vm = this.Observable;
            vm.set("isLoading", true);
            this.page.bindingContext = vm;
            this.router.navigate(["/tabs"]);
        }
    }

    submit() {
        if (!this.user.isValidEmail()) {
            alert("Enter a valid email address.");
            return;
        }
        this.appSettings.setString(this.user.email, this.user.password)
        this.login();
    }

    login() {
        this.userService.login(this.user)
            .subscribe(
                () => this.router.navigate(["/tabs"]),
                (error) => alert("Unfortunately we could not find your account.")
            ); 
    }
}

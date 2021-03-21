import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/services/authentication.service";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent implements OnInit {
  // Indicates if the navbar is collapsed -> not visible
  public navbarCollapsed = true;

  constructor(public authenticationService: AuthenticationService) { }

  ngOnInit(): void {
      //
  }

  public toggleNavbar(): void {
      this.navbarCollapsed = !this.navbarCollapsed;
  }
}

import { Component } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { FootbarComponent } from "../footbar/footbar.component";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavbarComponent, FootbarComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}

import { Component } from '@angular/core';
import { HeaderComponent } from "../../../header/header.component";
import { FooterComponent } from "../../../footer/footer.component";

@Component({
  selector: 'app-okrashivanie',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './okrashivanie.component.html',
  styleUrl: './okrashivanie.component.scss'
})
export class OkrashivanieComponent {

}

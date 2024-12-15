import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { ImageViewerComponent } from "../../image-viewer/image-viewer.component";

@Component({
  selector: 'app-nashi-raboti',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ImageViewerComponent],
  template: `
    <div class="wrapper">
      <app-header />
      <div class="banner-nashi-raboti banner">
        <div class="container">
          <div class="banner-academy-manicure__title banner-title">
            <h2>Работы наших мастеров</h2>
          </div>
        <div class="banner-komanda__icons icons">
          <img src="assets/icons/Женская_стрижка_иконка.png" alt="Icon 1" class="icon">
          <img src="assets/icons/Окрашевание_иконка.png" alt="Icon 2" class="icon">
          <img src="assets/icons/Уход_за_волосами_иконка.png" alt="Icon 3" class="icon">
          <img src="assets/icons/Массаж_иконка.png" alt="Icon 4" class="icon">
          <img src="assets/icons/Маникюр_иконка.png" alt="Icon 5" class="icon">
          <img src="assets/icons/Педикюр _иконка.png" alt="Icon 6" class="icon">
          <img src="assets/icons/Мужская_стрижка_иконка.png" alt="Icon 7" class="icon">
        </div>
        </div>
      </div>
      <div class="primeri-rabot">
        <div class="container">
          <div class="primeri-rabot__cards">
            <div class="primeri-rabot__card">
              Женская стрижка
            </div>
            <div class="primeri-rabot__card">
              Окрашивание
            </div>
            <div class="primeri-rabot__card">
              Уход за волосами
            </div>
            <div class="primeri-rabot__card">
              Маникюр
            </div>
            <div class="primeri-rabot__card">
              Педикюр
            </div>
            <div class="primeri-rabot__card">
              Мужская стрижка
            </div>
          </div>
        </div>
      </div>
      <app-image-viewer />
      <app-footer />
    </div>
  `,
  styleUrl: './nashi-raboti.component.scss'
})
export class NashiRabotiComponent {

}

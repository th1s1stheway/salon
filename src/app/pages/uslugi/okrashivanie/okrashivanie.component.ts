import { Component } from '@angular/core';
import { HeaderComponent } from "../../../header/header.component";
import { FooterComponent } from "../../../footer/footer.component";

@Component({
  selector: 'app-okrashivanie',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  template: `
  <div class="wrapper">
    <app-header />
    <div class="uslugi-prototype">
      <div class="container">
        <div class="uslugi-prototype__left">
            <div class="uslugi-prototype__title banner-title"><h2>ОКРАШИВАНИЕ ВОЛОС И УХОД</h2></div>
            <div class="uslugi-prototype__subtitle"><p>Окрашивания любой сложности: от однотонного до сложных техник, таких как балаяж, шатуш, эйртач, омбре, мелирование и т. д.(с применением современной техники «Лессировка»).</p></div>
            <div class="uslugi-prototype__icons icons">
              <img src="assets/icons/Женская_стрижка_иконка.png" alt="Icon 1" class="icon">
              <img src="assets/icons/Окрашевание_иконка.png" alt="Icon 2" class="icon">
              <img src="assets/icons/Уход_за_волосами_иконка.png" alt="Icon 3" class="icon">
              <img src="assets/icons/Массаж_иконка.png" alt="Icon 4" class="icon">
              <img src="assets/icons/Маникюр_иконка.png" alt="Icon 5" class="icon">
              <img src="assets/icons/Педикюр _иконка.png" alt="Icon 6" class="icon">
              <img src="assets/icons/Мужская_стрижка_иконка.png" alt="Icon 7" class="icon">
            </div>
        </div>
        <div class="uslugi-prototype__right">
            <img src="assets/Okrashivanie.png" alt="img.alt" style="width:100%; height:auto;">
        </div>
      </div>
    </div>
    <div class="uslugi-service">
      <div class="container">
        <table class="uslugi-service__table">
                <thead>
                    <tr>
                        <th>Название услуги</th>
                        <th>Время</th>
                        <th>Стоимость</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Массаж спины</td>
                        <td>45 минут</td>
                        <td>1 800 ₽</td>
                    </tr>
                    <tr>
                        <td>Общий классический массаж</td>
                        <td>60 минут</td>
                        <td>2 200 ₽</td>
                    </tr>
                    <tr>
                        <td>Общий классический массаж</td>
                        <td>90 минут</td>
                        <td>2 800 ₽</td>
                    </tr>
                    <tr>
                        <td>Лимфодренажный массаж</td>
                        <td>60 минут</td>
                        <td>2 200 ₽</td>
                    </tr>
                    <tr>
                        <td>Антицеллюлитный массаж</td>
                        <td>60 минут</td>
                        <td>2 400 ₽</td>
                    </tr>
                    <tr>
                        <td>Комплексный массаж</td>
                        <td>90 минут</td>
                        <td>2 300 ₽</td>
                    </tr>
                    <tr>
                        <td>Авторский массаж лица</td>
                        <td>90 минут</td>
                        <td>2 300 ₽</td>
                    </tr>
                    <tr>
                        <td>Классический массаж перчатками с микротоком</td>
                        <td>20 минут</td>
                        <td>2 300 ₽</td>
                    </tr>
                    <tr>
                        <td>Глубокий массаж перчатками с микротоком</td>
                        <td>40 минут</td>
                        <td>2 300 ₽</td>
                    </tr>

                    <tr>
                        <td>Массаж спины</td>
                        <td>45 минут</td>
                        <td>1 800 ₽</td>
                    </tr>
                    <tr>
                        <td>Общий классический массаж</td>
                        <td>60 минут</td>
                        <td>2 200 ₽</td>
                    </tr>
                    <tr>
                        <td>Общий классический массаж</td>
                        <td>90 минут</td>
                        <td>2 800 ₽</td>
                    </tr>
                    <tr>
                        <td>Лимфодренажный массаж</td>
                        <td>60 минут</td>
                        <td>2 200 ₽</td>
                    </tr>
                    <tr>
                        <td>Антицеллюлитный массаж</td>
                        <td>60 минут</td>
                        <td>2 400 ₽</td>
                    </tr>
                    <tr>
                        <td>Комплексный массаж</td>
                        <td>90 минут</td>
                        <td>2 300 ₽</td>
                    </tr>
                    <tr>
                        <td>Авторский массаж лица</td>
                        <td>90 минут</td>
                        <td>2 300 ₽</td>
                    </tr>
                    <tr>
                        <td>Классический массаж перчатками с микротоком</td>
                        <td>20 минут</td>
                        <td>2 300 ₽</td>
                    </tr>
                    <tr>
                        <td>Глубокий массаж перчатками с микротоком</td>
                        <td>40 минут</td>
                        <td>2 300 ₽</td>
                    </tr>
                </tbody>
        </table>
      </div>
    </div>
    <app-footer />
  </div>
  `,
  styleUrl: './okrashivanie.component.scss'
})
export class OkrashivanieComponent {

}
import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";

@Component({
  selector: 'app-komanda',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  template: `
  <div class="wrapper">
    <app-header />
    <div class="banner-komanda banner">
      <div class="container">
        <div class="banner-komanda__title banner-title"><h2>НАШИ МАСТЕРА</h2></div>
        <div class="banner-komanda__text banner-text">
          <p>Красота — не внешняя оболочка. Это и внутренняя свобода, уверенность в себе и интеллект. Красота индивидуальна, а каждый человек неповторим.Наши мастера помогут подружиться с собой, научиться любить себя, снять маски.
          </p>
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
    <div class="cards-komanda">
      <div class="container">
        <div class="cards-komanda__row">
          <div class="cards-komanda__item">
            <div class="cards-komanda__image">
              <img src="assets/komanda/komanda-1.png" alt="">
            </div>
            <div class="cards-komanda__name">
              Ирина 
            </div>
            <div class="cards-komanda__speciality">
              Парикмахер
            </div>
            <div class="cards-komanda__dop">
              <p>
            Опыт работы с 2019 года.Фанат работы с мужскими стрижками, также специализируется и на женских формах.
              </p>
              <br>
              <p>Регулярно повышает свою квалификацию и расширяет спектр услуг.Из последних обучений:— Курс по укладкам от Ларисы Гималиевой— Курс «Женские стрижки с нуля «и «Женские стрижки pro» В Soco Academy, а также «Барбер Pro»— Повышение квалификации: Николай Генералов «Fade Calculator» и "Face control"
              </p>
            </div>
            <div class="cards-komanda__button">
              <button class="button-green">Записаться на приём</button>
            </div>
          </div>
          <div class="cards-komanda__item">
            <div class="cards-komanda__image">
              <img src="assets/komanda/komanda-2.png" alt="">
            </div>
            <div class="cards-komanda__name">
              Ирина 
            </div>
            <div class="cards-komanda__speciality">
              Парикмахер
            </div>
            <div class="cards-komanda__dop">
              <p>
            Опыт работы с 2019 года.Фанат работы с мужскими стрижками, также специализируется и на женских формах.
              </p>
              <br>
              <p>Регулярно повышает свою квалификацию и расширяет спектр услуг.Из последних обучений:— Курс по укладкам от Ларисы Гималиевой— Курс «Женские стрижки с нуля «и «Женские стрижки pro» В Soco Academy, а также «Барбер Pro»— Повышение квалификации: Николай Генералов «Fade Calculator» и "Face control"
              </p>
            </div>
            <div class="cards-komanda__button">
              <button class="button-green">Записаться на приём</button>
            </div>
          </div>
          <div class="cards-komanda__item">
            <div class="cards-komanda__image">
              <img src="assets/komanda/komanda-3.png" alt="">
            </div>
            <div class="cards-komanda__name">
              Ирина 
            </div>
            <div class="cards-komanda__speciality">
              Парикмахер
            </div>
            <div class="cards-komanda__dop">
              <p>
            Опыт работы с 2019 года.Фанат работы с мужскими стрижками, также специализируется и на женских формах.
              </p>
              <br>
              <p>Регулярно повышает свою квалификацию и расширяет спектр услуг.Из последних обучений:— Курс по укладкам от Ларисы Гималиевой— Курс «Женские стрижки с нуля «и «Женские стрижки pro» В Soco Academy, а также «Барбер Pro»— Повышение квалификации: Николай Генералов «Fade Calculator» и "Face control"
              </p>
            </div>
            <div class="cards-komanda__button">
              <button class="button-green">Записаться на приём</button>
            </div>
          </div>
          <div class="cards-komanda__item">
            <div class="cards-komanda__image">
              <img src="assets/komanda/komanda-4.png" alt="">
            </div>
            <div class="cards-komanda__name">
              Ирина 
            </div>
            <div class="cards-komanda__speciality">
              Парикмахер
            </div>
            <div class="cards-komanda__dop">
              <p>
            Опыт работы с 2019 года.Фанат работы с мужскими стрижками, также специализируется и на женских формах.
              </p>
              <br>
              <p>Регулярно повышает свою квалификацию и расширяет спектр услуг.Из последних обучений:— Курс по укладкам от Ларисы Гималиевой— Курс «Женские стрижки с нуля «и «Женские стрижки pro» В Soco Academy, а также «Барбер Pro»— Повышение квалификации: Николай Генералов «Fade Calculator» и "Face control"
              </p>
            </div>
            <div class="cards-komanda__button">
              <button class="button-green">Записаться на приём</button>
            </div>
          </div>
          <div class="cards-komanda__item">
            <div class="cards-komanda__image">
              <img src="assets/komanda/komanda-5.png" alt="">
            </div>
            <div class="cards-komanda__name">
              Ирина 
            </div>
            <div class="cards-komanda__speciality">
              Парикмахер
            </div>
            <div class="cards-komanda__dop">
              <p>
            Опыт работы с 2019 года.Фанат работы с мужскими стрижками, также специализируется и на женских формах.
              </p>
              <br>
              <p>Регулярно повышает свою квалификацию и расширяет спектр услуг.Из последних обучений:— Курс по укладкам от Ларисы Гималиевой— Курс «Женские стрижки с нуля «и «Женские стрижки pro» В Soco Academy, а также «Барбер Pro»— Повышение квалификации: Николай Генералов «Fade Calculator» и "Face control"
              </p>
            </div>
            <div class="cards-komanda__button">
              <button class="button-green">Записаться на приём</button>
            </div>
          </div>
          <div class="cards-komanda__item">
            <div class="cards-komanda__image">
              <img src="assets/komanda/komanda-6.png" alt="">
            </div>
            <div class="cards-komanda__name">
              Ирина 
            </div>
            <div class="cards-komanda__speciality">
              Парикмахер
            </div>
            <div class="cards-komanda__dop">
              <p>
            Опыт работы с 2019 года.Фанат работы с мужскими стрижками, также специализируется и на женских формах.
              </p>
              <br>
              <p>Регулярно повышает свою квалификацию и расширяет спектр услуг.Из последних обучений:— Курс по укладкам от Ларисы Гималиевой— Курс «Женские стрижки с нуля «и «Женские стрижки pro» В Soco Academy, а также «Барбер Pro»— Повышение квалификации: Николай Генералов «Fade Calculator» и "Face control"
              </p>
            </div>
            <div class="cards-komanda__button">
              <button class="button-green">Записаться на приём</button>
            </div>
          </div>
          <div class="cards-komanda__item">
            <div class="cards-komanda__image">
              <img src="assets/komanda/komanda-7.png" alt="">
            </div>
            <div class="cards-komanda__name">
              Ирина 
            </div>
            <div class="cards-komanda__speciality">
              Парикмахер
            </div>
            <div class="cards-komanda__dop">
              <p>
            Опыт работы с 2019 года.Фанат работы с мужскими стрижками, также специализируется и на женских формах.
              </p>
              <br>
              <p>Регулярно повышает свою квалификацию и расширяет спектр услуг.Из последних обучений:— Курс по укладкам от Ларисы Гималиевой— Курс «Женские стрижки с нуля «и «Женские стрижки pro» В Soco Academy, а также «Барбер Pro»— Повышение квалификации: Николай Генералов «Fade Calculator» и "Face control"
              </p>
            </div>
            <div class="cards-komanda__button">
              <button class="button-green">Записаться на приём</button>
            </div>
          </div>
          <div class="cards-komanda__item">
            <div class="cards-komanda__image">
              <img src="assets/komanda/komanda-8.png" alt="">
            </div>
            <div class="cards-komanda__name">
              Ирина 
            </div>
            <div class="cards-komanda__speciality">
              Парикмахер
            </div>
            <div class="cards-komanda__dop">
              <p>
            Опыт работы с 2019 года.Фанат работы с мужскими стрижками, также специализируется и на женских формах.
              </p>
              <br>
              <p>Регулярно повышает свою квалификацию и расширяет спектр услуг.Из последних обучений:— Курс по укладкам от Ларисы Гималиевой— Курс «Женские стрижки с нуля «и «Женские стрижки pro» В Soco Academy, а также «Барбер Pro»— Повышение квалификации: Николай Генералов «Fade Calculator» и "Face control"
              </p>
            </div>
            <div class="cards-komanda__button">
              <button class="button-green">Записаться на приём</button>
            </div>
          </div>
          <div class="cards-komanda__item">
            <div class="cards-komanda__image">
              <img src="assets/komanda/komanda-9.png" alt="">
            </div>
            <div class="cards-komanda__name">
              Ирина 
            </div>
            <div class="cards-komanda__speciality">
              Парикмахер
            </div>
            <div class="cards-komanda__dop">
              <p>
            Опыт работы с 2019 года.Фанат работы с мужскими стрижками, также специализируется и на женских формах.
              </p>
              <br>
              <p>Регулярно повышает свою квалификацию и расширяет спектр услуг.Из последних обучений:— Курс по укладкам от Ларисы Гималиевой— Курс «Женские стрижки с нуля «и «Женские стрижки pro» В Soco Academy, а также «Барбер Pro»— Повышение квалификации: Николай Генералов «Fade Calculator» и "Face control"
              </p>
            </div>
            <div class="cards-komanda__button">
              <button class="button-green">Записаться на приём</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="stroka">
      <div class="container">
        <div class="stroka__row">
          <div class="stroka__item">
            <img src="assets/stroka/1_logo.png" alt="1_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/2_logo.png" alt="2_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/3_logo.png" alt="3_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/4_logo.png" alt="4_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/5_logo.png" alt="5_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/6_logo.png" alt="6_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/7_logo.png" alt="7_logo">
          </div>
          
          <div class="stroka__item">
            <img src="assets/stroka/1_logo.png" alt="1_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/2_logo.png" alt="2_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/3_logo.png" alt="3_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/4_logo.png" alt="4_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/5_logo.png" alt="5_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/6_logo.png" alt="6_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/7_logo.png" alt="7_logo">
          </div>

          <div class="stroka__item">
            <img src="assets/stroka/1_logo.png" alt="1_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/2_logo.png" alt="2_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/3_logo.png" alt="3_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/4_logo.png" alt="4_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/5_logo.png" alt="5_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/6_logo.png" alt="6_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/7_logo.png" alt="7_logo">
          </div>

          <div class="stroka__item">
            <img src="assets/stroka/1_logo.png" alt="1_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/2_logo.png" alt="2_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/3_logo.png" alt="3_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/4_logo.png" alt="4_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/5_logo.png" alt="5_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/6_logo.png" alt="6_logo">
          </div>
          <div class="stroka__item">
            <img src="assets/stroka/7_logo.png" alt="7_logo">
          </div>
        </div>
      </div>
    </div>
    <app-footer />
  </div>
  .
  `,
})
export class KomandaComponent {

}

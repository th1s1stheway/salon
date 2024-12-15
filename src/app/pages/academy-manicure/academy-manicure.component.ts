import { Component } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { FooterComponent } from "../../footer/footer.component";
import { ImageViewerAcademyComponent } from "../../image-viewer-academy/image-viewer-academy.component";

@Component({
  selector: 'app-academy-manicure',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, ImageViewerAcademyComponent],
  template: `
  <div class="wrapper">
    <app-header />
    <div class="banner-academy-manicure banner">
      <div class="container">
        <div class="banner-academy-manicure__title banner-title"><h2>обучение МАСТЕРОВ МАНИКЮРА</h2></div>
        <div class="banner-academy-manicure__text banner-text">
          <p>
            Обучитесь навыкам работы мастром маникюра и окупите обучение уже через месяц.
          </p>
        </div>
      </div>
    </div>
    <div class="cards-academy-manicure">
      <div class="container">
        <div class="cards-academy-manicure__row">
        <div class="cards-academy-manicure__item">
            <div class="cards-academy-manicure__body">
              <div class="cards-academy-manicure__image">
                <img src="assets/cards-academy-manicure/1.png" alt="">
              </div>
              <div class="cards-academy-manicure__title">
                биоламинирование ногтей</div>
              <div class="cards-academy-manicure__info">
                Продолжительность: 1 день (9 часов).
                Численность: в группе по 3-4 человека и индивидуально.
                Время проведения занятий: с 10.00 до 18.00.
              </div>
              <div class="cards-academy-manicure__text">
                В программе курса:
                <ul>
                  <li>- знакомство с продуктом;</li>
                  <li>- схема прорисовки линии улыбки гель-лаком с учетом формы ногтей;</li>
                  <li>- особенности в подготовке ногтевой пластины к нанесению;</li>
                  <li>- работа в технике мягкого градиента "Babyboomer";</li>
                  <li>- создание правильной архитектуры;</li>
                  <li>- выравнивание "идеальный блик".</li>
                </ul>
              </div>
            </div>
            <div class="cards-academy-manicure__button">
              <button class="button-green">Подробнее</button>
            </div>
          </div>
          <div class="cards-academy-manicure__item">
            <div class="cards-academy-manicure__image">
              <img src="assets/cards-academy-manicure/1.png" alt="">
            </div>
            <div class="cards-academy-manicure__title">
              биоламинирование ногтей</div>
            <div class="cards-academy-manicure__info">
              Продолжительность: 1 день (9 часов).
              Численность: в группе по 3-4 человека и индивидуально.
              Время проведения занятий: с 10.00 до 18.00.
            </div>
            <div class="cards-academy-manicure__text">
              В программе курса:
              <ul>
                <li>- знакомство с продуктом;</li>
                <li>- схема прорисовки линии улыбки гель-лаком с учетом формы ногтей;</li>
                <li>- особенности в подготовке ногтевой пластины к нанесению;</li>
                <li>- работа в технике мягкого градиента "Babyboomer";</li>
                <li>- создание правильной архитектуры;</li>
                <li>- выравнивание "идеальный блик".</li>
              </ul>
            </div>
            <div class="cards-academy-manicure__button">
              <button class="button-green">Подробнее</button>
            </div>
          </div>
          <div class="cards-academy-manicure__item">
            <div class="cards-academy-manicure__image">
              <img src="assets/cards-academy-manicure/1.png" alt="">
            </div>
            <div class="cards-academy-manicure__title">
              биоламинирование ногтей</div>
            <div class="cards-academy-manicure__info">
              Продолжительность: 1 день (9 часов).
              Численность: в группе по 3-4 человека и индивидуально.
              Время проведения занятий: с 10.00 до 18.00.
            </div>
            <div class="cards-academy-manicure__text">
              В программе курса:
              <ul>
                <li>- знакомство с продуктом;</li>
                <li>- схема прорисовки линии улыбки гель-лаком с учетом формы ногтей;</li>
                <li>- особенности в подготовке ногтевой пластины к нанесению;</li>
                <li>- работа в технике мягкого градиента "Babyboomer";</li>
                <li>- создание правильной архитектуры;</li>
                <li>- выравнивание "идеальный блик".</li>
              </ul>
            </div>
            <div class="cards-academy-manicure__button">
              <button class="button-green">Подробнее</button>
            </div>
          </div>
        </div>
        <div class="cards-academy-manicure__row">
        <div class="cards-academy-manicure__item">
            <div class="cards-academy-manicure__body">
              <div class="cards-academy-manicure__image">
                <img src="assets/cards-academy-manicure/1.png" alt="">
              </div>
              <div class="cards-academy-manicure__title">
                биоламинирование ногтей</div>
              <div class="cards-academy-manicure__info">
                Продолжительность: 1 день (9 часов).
                Численность: в группе по 3-4 человека и индивидуально.
                Время проведения занятий: с 10.00 до 18.00.
              </div>
              <div class="cards-academy-manicure__text">
                В программе курса:
                <ul>
                  <li>- знакомство с продуктом;</li>
                  <li>- схема прорисовки линии улыбки гель-лаком с учетом формы ногтей;</li>
                  <li>- особенности в подготовке ногтевой пластины к нанесению;</li>
                  <li>- работа в технике мягкого градиента "Babyboomer";</li>
                  <li>- создание правильной архитектуры;</li>
                  <li>- выравнивание "идеальный блик".</li>
                </ul>
              </div>
            </div>
            <div class="cards-academy-manicure__button">
              <button class="button-green">Подробнее</button>
            </div>
          </div>
          <div class="cards-academy-manicure__item">
            <div class="cards-academy-manicure__image">
              <img src="assets/cards-academy-manicure/1.png" alt="">
            </div>
            <div class="cards-academy-manicure__title">
              биоламинирование ногтей</div>
            <div class="cards-academy-manicure__info">
              Продолжительность: 1 день (9 часов).
              Численность: в группе по 3-4 человека и индивидуально.
              Время проведения занятий: с 10.00 до 18.00.
            </div>
            <div class="cards-academy-manicure__text">
              В программе курса:
              <ul>
                <li>- знакомство с продуктом;</li>
                <li>- схема прорисовки линии улыбки гель-лаком с учетом формы ногтей;</li>
                <li>- особенности в подготовке ногтевой пластины к нанесению;</li>
                <li>- работа в технике мягкого градиента "Babyboomer";</li>
                <li>- создание правильной архитектуры;</li>
                <li>- выравнивание "идеальный блик".</li>
              </ul>
            </div>
            <div class="cards-academy-manicure__button">
              <button class="button-green">Подробнее</button>
            </div>
          </div>
          <div class="cards-academy-manicure__item">
            <div class="cards-academy-manicure__image">
              <img src="assets/cards-academy-manicure/1.png" alt="">
            </div>
            <div class="cards-academy-manicure__title">
              биоламинирование ногтей</div>
            <div class="cards-academy-manicure__info">
              Продолжительность: 1 день (9 часов).
              Численность: в группе по 3-4 человека и индивидуально.
              Время проведения занятий: с 10.00 до 18.00.
            </div>
            <div class="cards-academy-manicure__text">
              В программе курса:
              <ul>
                <li>- знакомство с продуктом;</li>
                <li>- схема прорисовки линии улыбки гель-лаком с учетом формы ногтей;</li>
                <li>- особенности в подготовке ногтевой пластины к нанесению;</li>
                <li>- работа в технике мягкого градиента "Babyboomer";</li>
                <li>- создание правильной архитектуры;</li>
                <li>- выравнивание "идеальный блик".</li>
              </ul>
            </div>
            <div class="cards-academy-manicure__button">
              <button class="button-green">Подробнее</button>
            </div>
          </div>
        </div>
        <div class="cards-academy-manicure__row">
          <div class="cards-academy-manicure__item">
            <div class="cards-academy-manicure__body">
              <div class="cards-academy-manicure__image">
                <img src="assets/cards-academy-manicure/1.png" alt="">
              </div>
              <div class="cards-academy-manicure__title">
                биоламинирование ногтей</div>
              <div class="cards-academy-manicure__info">
                Продолжительность: 1 день (9 часов).
                Численность: в группе по 3-4 человека и индивидуально.
                Время проведения занятий: с 10.00 до 18.00.
              </div>
              <div class="cards-academy-manicure__text">
                В программе курса:
                <ul>
                  <li>- знакомство с продуктом;</li>
                  <li>- схема прорисовки линии улыбки гель-лаком с учетом формы ногтей;</li>
                  <li>- особенности в подготовке ногтевой пластины к нанесению;</li>
                  <li>- работа в технике мягкого градиента "Babyboomer";</li>
                  <li>- создание правильной архитектуры;</li>
                  <li>- выравнивание "идеальный блик".</li>
                </ul>
              </div>
            </div>
            <div class="cards-academy-manicure__button">
              <button class="button-green">Подробнее</button>
            </div>
          </div>
          <div class="cards-academy-manicure__item">
            <div class="cards-academy-manicure__image">
              <img src="assets/cards-academy-manicure/1.png" alt="">
            </div>
            <div class="cards-academy-manicure__title">
              биоламинирование ногтей</div>
            <div class="cards-academy-manicure__info">
              Продолжительность: 1 день (9 часов).
              Численность: в группе по 3-4 человека и индивидуально.
              Время проведения занятий: с 10.00 до 18.00.
            </div>
            <div class="cards-academy-manicure__text">
              В программе курса:
              <ul>
                <li>- знакомство с продуктом;</li>
                <li>- схема прорисовки линии улыбки гель-лаком с учетом формы ногтей;</li>
                <li>- особенности в подготовке ногтевой пластины к нанесению;</li>
                <li>- работа в технике мягкого градиента "Babyboomer";</li>
                <li>- создание правильной архитектуры;</li>
                <li>- выравнивание "идеальный блик".</li>
              </ul>
            </div>
            <div class="cards-academy-manicure__button">
              <button class="button-green">Подробнее</button>
            </div>
          </div>
          <div class="cards-academy-manicure__item">
            <div class="cards-academy-manicure__image">
              <img src="assets/cards-academy-manicure/1.png" alt="">
            </div>
            <div class="cards-academy-manicure__title">
              биоламинирование ногтей</div>
            <div class="cards-academy-manicure__info">
              Продолжительность: 1 день (9 часов).
              Численность: в группе по 3-4 человека и индивидуально.
              Время проведения занятий: с 10.00 до 18.00.
            </div>
            <div class="cards-academy-manicure__text">
              В программе курса:
              <ul>
                <li>- знакомство с продуктом;</li>
                <li>- схема прорисовки линии улыбки гель-лаком с учетом формы ногтей;</li>
                <li>- особенности в подготовке ногтевой пластины к нанесению;</li>
                <li>- работа в технике мягкого градиента "Babyboomer";</li>
                <li>- создание правильной архитектуры;</li>
                <li>- выравнивание "идеальный блик".</li>
              </ul>
            </div>
            <div class="cards-academy-manicure__button">
              <button class="button-green">Подробнее</button>
            </div>
          </div>
        </div>
    <div class="students-academy-manicure">
      <div class="container">
        <div class="students-academy-manicure__title title">
          <h2>Работы учеников</h2>
        </div>
        <app-image-viewer-academy />
      </div>
      </div>
      </div>
    </div>
    <app-footer />
  </div>
  `,
})
export class AcademyManicureComponent {

}

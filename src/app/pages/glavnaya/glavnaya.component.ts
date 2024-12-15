import { Component, CUSTOM_ELEMENTS_SCHEMA, AfterViewInit } from '@angular/core';
import { HeaderComponent } from "../../header/header.component";
import { register } from 'swiper/element/bundle'; // Импортируйте для использования веб-компонентов
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../footer/footer.component";
import { AccordeonComponent } from "../../accordeon/accordeon.component";
import { ImageSliderComponent } from "../../image-slider/image-slider.component";
import { ImageViewerComponent } from "../../image-viewer/image-viewer.component";
import { ImageSliderTopComponent } from "../../image-slider-top/image-slider-top.component";
import { ImageSliderPortfolioComponent } from "../../image-slider-portfolio/image-slider-portfolio.component";

register();

@Component({
  selector: 'app-glavnaya',
  standalone: true,
  imports: [HeaderComponent, CommonModule, FooterComponent, AccordeonComponent, ImageSliderComponent, ImageViewerComponent, ImageSliderTopComponent, ImageSliderPortfolioComponent,],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
  <div class="wrapper">
    <app-header />
    <div class="container">
      <div class="top">
        <div class="top__left">
          <div class="top__title banner-title"><h2>Салон красоты в Красноярске</h2></div>
          <div class="top__subtitle"><p>Место, где вы за один день сможете преобразиться и расслабиться на массаже</p></div>
          <button>Онлайн запись</button>
          <div class="top__icons icons">
            <img src="assets/icons/Женская_стрижка_иконка.png" alt="Icon 1" class="icon">
            <img src="assets/icons/Окрашевание_иконка.png" alt="Icon 2" class="icon">
            <img src="assets/icons/Уход_за_волосами_иконка.png" alt="Icon 3" class="icon">
            <img src="assets/icons/Массаж_иконка.png" alt="Icon 4" class="icon">
            <img src="assets/icons/Маникюр_иконка.png" alt="Icon 5" class="icon">
            <img src="assets/icons/Педикюр _иконка.png" alt="Icon 6" class="icon">
            <img src="assets/icons/Мужская_стрижка_иконка.png" alt="Icon 7" class="icon">
          </div>
        </div>
        <div class="top__right">
          <app-image-slider-top />
        </div>
      </div>
    </div>
    <app-accordeon />
    <div class="portfolio">
      <div class="container">
        <div class="portfolio__title title"><h2>Работы наших мастеров</h2></div>
        <div class="portfolio__cards">
          <div class="portfolio__card">
            Женская стрижка
          </div>
          <div class="portfolio__card">
            Окрашивание
          </div>
          <div class="portfolio__card">
            Уход за волосами
          </div>
          <div class="portfolio__card">
            Маникюр
          </div>
          <div class="portfolio__card">
            Педикюр
          </div>
          <div class="portfolio__card">
            Мужская стрижка
          </div>
        </div>
        <div class="portfolio__slider">
          <app-image-slider-portfolio />
        </div>
      </div>
    </div>
    <div class="academy">
      <div class="container">
        <div class="academy__title title"><h2>Академия маникюра</h2></div>
        <div class="academy__body">
          <div class="academy__left">
            <div class="academy__row">
              <div class="academy__column-1">
                <div class="academy__item">
                  <img src="assets/icons/Пункт_иконка.png" alt="">
                  <div class="academy__item-title">4 курса</div>
                  <div class="academy__item-text">для закрытия всех вопросов </div>
                </div>
                <div class="academy__item">
                  <img src="assets/icons/Пункт_иконка.png" alt="">
                  <div class="academy__item-title">Проф оборудование</div>
                  <div class="academy__item-text">школа предоставляет все материалы</div>
                </div>
                <div class="academy__item">
                  <img src="assets/icons/Пункт_иконка.png" alt="">
                  <div class="academy__item-title">Помощь с фрилансом</div>
                  <div class="academy__item-text">рассказываем, как работать на себя</div>
                </div>
              </div>
              <div class="academy__column-2">
                <div class="academy__item">
                  <img src="assets/icons/Пункт_иконка.png" alt="">
                  <div class="academy__item-title">Сертификаты</div>
                  <div class="academy__item-text">о прохождении курсов</div>
                </div>
                <div class="academy__item">
                  <img src="assets/icons/Пункт_иконка.png" alt="">
                  <div class="academy__item-title">Теория и практика</div>
                  <div class="academy__item-text">все оттачивается с преподавателем</div>
                </div>
                <div class="academy__item">
                  <img src="assets/icons/Пункт_иконка.png" alt="">
                  <div class="academy__item-title">25 тем</div>
                  <div class="academy__item-text">полное погружение в ногтевую сферу</div>
                </div>
              </div>
            </div>
          </div>
          <div class="academy__right">
            <button class="button-yellow">Подробнее о курсах</button> 
          </div>
        </div>

      </div>
    </div>
    <div class="team">
      <div class="container">
        <div class="team__title title"><h2>Команда мастеров</h2></div>
        <div class="team__body">
          <app-image-slider />
        </div>
      </div>
    </div>
    <div class="why">
      <div class="container">
        <div class="why__title title"><h2>Почему клиенты выбирают 
        Салон красоты «Krasa» </h2></div>
        <div class="why__body">
          <div class="why__left"></div>
          <div class="why__right">
            <div class="why__text">
              <p>Все процедуры в нашем салоне выполняют опытные мастера, которые имеют дипломы, сертификаты и награды, подтверждающие их высокий уровень профессионализма и владение современными техниками.</p>
              <br>
              <p>Мы гордимся обширным портфолио документальных подтверждений квалификации нашей команды. </p>
              <br>
              <p>Эти достижения – ваша гарантия того, что услуги предоставляются исключительно сертифицированными специалистами и соответствуют самым высоким стандартам качества. </p>
              <br>
              <p>Ваше доверие – наша главная ценность, и мы стремимся оправдывать его в каждой процедуре.</p>
            </div>
            <div class="why__button"><button>Смотреть отзывы</button></div>
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
  `,
})
export class GlavnayaComponent {
  images = [
    { src: 'assets/1.png', alt: 'Image 1' },
    { src: 'assets/2.png', alt: 'Image 2' },
    { src: 'assets/3.png', alt: 'Image 3' },
    { src: 'assets/4.png', alt: 'Image 4' },
    { src: 'assets/5.png', alt: 'Image 5' },
    { src: 'assets/6.png', alt: 'Image 6' },
  ];
  imagesPortfolio = [
    { src: 'assets/portfolio/test_portfolio.png', alt: 'Image 1',
      master: 'Мастер Анастасия Попова',
     },
    { src: 'assets/portfolio/test_portfolio.png', alt: 'Image 2' },
    { src: 'assets/portfolio/test_portfolio.png', alt: 'Image 3' },
    { src: 'assets/portfolio/test_portfolio.png', alt: 'Image 4' }, 
    { src: 'assets/portfolio/test_portfolio.png', alt: 'Image 5' },
    { src: 'assets/portfolio/test_portfolio.png', alt: 'Image 6' },
  ];
  imagesTeam = [
    { src: 'assets/portfolio/test_portfolio.png', alt: 'Image 1',
      master: 'Мастер Анастасия Попова',
      speciality: 'Парикмахер',
     },
    { src: 'assets/portfolio/test_portfolio.png', alt: 'Image 2' },
    { src: 'assets/portfolio/test_portfolio.png', alt: 'Image 3' },
    { src: 'assets/portfolio/test_portfolio.png', alt: 'Image 4' }, 
    { src: 'assets/portfolio/test_portfolio.png', alt: 'Image 5' },
    { src: 'assets/portfolio/test_portfolio.png', alt: 'Image 6' },
  ];

}


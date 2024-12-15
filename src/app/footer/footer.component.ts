import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
  <footer>
    <div class="container">
      <div class="footer__top">
        <div class="footer__row">
          <div class="footer__column"> 
            <div class="footer__item-logo">
              <div class="footer__logo">
                <img src="assets/logo-footer.png" alt="Логотип" />
              </div>
              <div class="footer__icons">
                <div class="footer__icon">
                  <img src="assets/footer__icons/whatsApp.svg" alt="">
                </div>
                <div class="footer__icon">
                  <img src="assets/footer__icons/VK.svg" alt="">
                </div>
              </div>
              <div class="footer__author">Ⓒ ИП Шаполвалова, 2024</div>
              <div class="footer__politika">Политика конфиденциальности</div>
            </div>
          </div>
          <div class="footer__column"> 
            <div class="footer__item">
              <div class="footer__title">
                <h2>Услуги</h2>
              </div>
              <div class="footer__body">
                <ul>
                  <li>Стрижки и укладки </li>
                  <li>Окрашивание</li>
                  <li>Уход за волосами </li>
                  <li>Маникюр</li>
                  <li>Педикюр</li>
                  <li>Массаж</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer__column"> 
            <div class="footer__item">
              <div class="footer__title">
                <h2>Академия</h2>
              </div>
              <div class="footer__body">
                <ul>
                  <li>Маникюр от А до Я</li>
                  <li>Гель-лак NANLAC</li>
                  <li>Дизайн ногтей «Френч» </li>
                  <li>Гелевый маникюр</li>
                  <li>Постановка формы</li>
                  <li>Другое</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer__column"> 
            <div class="footer__item">
              <div class="footer__title">
                <h2>Салон</h2>
              </div>
              <div class="footer__body">
                <ul>
                  <li>Услуги </li>
                  <li>Наши работы</li>
                  <li>Мастера </li>
                  <li>О нас</li>
                  <li>Педикюр</li>
                  <li>Массаж</li>
                </ul>
              </div>
            </div>
          </div>
        
        </div>
      </div>
      <div class="footer__contact">
        <div class="footer__row-contact">
          <div class="footer__column-contact">
            <div class="footer__item-contact">
              <p>Ежедневно с 09:00 до 20:00</p>
            </div>
          </div>
          <div class="footer__column-contact">
            <div class="footer__item-contact">
              <p>ул. Красноярский рабочий 160, стр.1</p>
            </div>
          </div>
          <div class="footer__column-contact">
            <div class="footer__item-contact">
              <h2>+7 (391) 845-98-32</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="footer__map">
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Affaf14f3c61d7bb598293d6e8aae48631b1e5f3bfde91370197fa89bc78ee87c&amp;source=constructor" width="100%" height="302" frameborder="0">
        </iframe>
        <!-- Здесь будет Яндекс карта -->
      </div>
    </div>
  </footer>
  `
  
})
export class FooterComponent {

}

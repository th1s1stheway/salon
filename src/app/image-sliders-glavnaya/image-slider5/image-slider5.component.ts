import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider5',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-slider5.component.html',
  styleUrl: './image-slider5.component.scss'
})
export class ImageSlider5Component {
  imagesPortfolio = [
    { src: 'assets/portfolio/test_portfolio.png', alt: 'Image 1',
      master: 'Мастер Анастасия Попова5',
     },
    { src: 'assets/portfolio/test_portfolio.png', alt: 'Image 2' },
    { src: 'assets/portfolio/test_portfolio.png', alt: 'Image 3' },
    { src: 'assets/portfolio/test_portfolio.png', alt: 'Image 4' }, 
    { src: 'assets/portfolio/test_portfolio.png', alt: 'Image 5' },
    { src: 'assets/portfolio/test_portfolio.png', alt: 'Image 6' },
  ];

  currentIndex = 0;

  nextSlide() {
    if (this.currentIndex < this.imagesPortfolio.length - 1) {
      this.currentIndex += 1; // Переключение на следующий слайд
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1; // Переключение на предыдущий слайд
    }
  }

  get visibleImages() {
    return this.imagesPortfolio.slice(this.currentIndex, this.currentIndex + 1); // Получаем текущие три изображения
  }

  get isNextDisabled() {
    return this.currentIndex >= this.imagesPortfolio.length - 1; // Проверка, отключена ли кнопка "Вперед"
  }

  get isPrevDisabled() {
    return this.currentIndex === 0; // Проверка, отключена ли кнопка "Назад"
  }
}

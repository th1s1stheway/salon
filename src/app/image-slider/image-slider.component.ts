import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.scss'
})
export class ImageSliderComponent {
  imagesTeam = [
    { src: 'assets/portfolio/1.png', alt: 'Image 1',
      master: 'Мастер Анастасия Попова',
      speciality: 'Парикмахер',
     },
    { src: 'assets/portfolio/2.png', alt: 'Image 2' ,
      master: 'Мастер Анастасия Попова',
      speciality: 'Парикмахер',
    },
    { src: 'assets/portfolio/3.png', alt: 'Image 3', 
      master: 'Мастер Анастасия Попова',
      speciality: 'Парикмахер',
    },
    { src: 'assets/portfolio/1.png', alt: 'Image 4', 
      master: 'Мастер Анастасия Попова',
      speciality: 'Парикмахер',
    }, 
    { src: 'assets/portfolio/2.png', alt: 'Image 5', 
      master: 'Мастер Анастасия Попова',
      speciality: 'Парикмахер',
    },
    { src: 'assets/portfolio/3.png', alt: 'Image 6', 
      master: 'Мастер Анастасия Попова',
      speciality: 'Парикмахер',
    },
    { src: 'assets/portfolio/1.png', alt: 'Image 7', 
      master: 'Мастер Анастасия Попова',
      speciality: 'Парикмахер',
    },
    { src: 'assets/portfolio/2.png', alt: 'Image 8', 
      master: 'Мастер Анастасия Попова',
      speciality: 'Парикмахер',
    },
  ];

  currentIndex = 0;

  nextSlide() {
    if (this.currentIndex < this.imagesTeam.length - 3) {
      this.currentIndex += 1; // Переключение на следующий слайд
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex -= 1; // Переключение на предыдущий слайд
    }
  }

  get visibleImages() {
    return this.imagesTeam.slice(this.currentIndex, this.currentIndex + 3); // Получаем текущие три изображения
  }

  get isNextDisabled() {
    return this.currentIndex >= this.imagesTeam.length - 3; // Проверка, отключена ли кнопка "Вперед"
  }

  get isPrevDisabled() {
    return this.currentIndex === 0; // Проверка, отключена ли кнопка "Назад"
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-accordeon',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './accordeon.component.html',
  styleUrl: './accordeon.component.scss'
})
export class AccordeonComponent {
  currentContentIndex = 0;

  // Содержимое для отображения
  contents = [
    {
      title: 'Заголовок 1',
      image: 'assets/icons/uslugi_massage.png',
      text: 'Это текст для 1 блока.'
    },
    {
      title: 'Заголовок 2',
      image: 'https://via.placeholder.com/150?text=Image+2',
      text: 'Это текст для второго блока.'
    },
    {
      title: 'Заголовок 3',
      image: 'https://via.placeholder.com/150?text=Image+3',
      text: 'Это текст для третьего блока.'
    },
    {
      title: 'Заголовок 2',
      image: 'https://via.placeholder.com/150?text=Image+2',
      text: 'Это текст для второго блока.'
    },
    {
      title: 'Заголовок 2',
      image: 'https://via.placeholder.com/150?text=Image+2',
      text: 'Это текст для второго блока.'
    },
    {
      title: 'Заголовок 2',
      image: 'https://via.placeholder.com/150?text=Image+2',
      text: 'Это текст для второго блока.'
    },
  ];

  buttons = [
    { text: 'Женские стрижки и укладки', isActive: true }, //true, т.к. при загрузке страницы показывается активным первый элемент
    { text: 'Окрашивание  и уход', isActive: false },
    { text: 'Массаж', isActive: false },
    { text: 'Маникюр', isActive: false },
    { text: 'Педикюр', isActive: false },
    { text: 'Мужские стрижки', isActive: false },
  ];


  changeContent(index: number) {
    // Меняем содержимое
    this.currentContentIndex = index;


    // Переключаем состояние кнопки
    let button = this.buttons[index];
    button.isActive = !button.isActive; // Переключаем активное состояние

    this.buttons.forEach((panel, i) => {
      panel.isActive = i === index; // Активируем только ту панель, на которую нажали, чтобы изменялась иконка
    });

  } 
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image-viewer1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-viewer1.component.html',
  styleUrl: './image-viewer1.component.scss'
})
export class ImageViewer1Component {
  images = [
    { src: 'assets/nashi-raboti.png', alt: 'Image 1' },
    { src: 'assets/nashi-raboti.png', alt: 'Image 2' },
    { src: 'assets/nashi-raboti.png', alt: 'Image 3' },
    { src: 'assets/nashi-raboti.png', alt: 'Image 4' },
    { src: 'assets/nashi-raboti.png', alt: 'Image 5' },
    { src: 'assets/nashi-raboti.png', alt: 'Image 6' },
    { src: 'assets/nashi-raboti.png', alt: 'Image 7' },
    { src: 'assets/nashi-raboti.png', alt: 'Image 8' },
  ];

  selectedImage: string | null = null;

  openImage(imageSrc: string) {
    this.selectedImage = imageSrc;
  }

  closeImage() {
    this.selectedImage = null;
  }
}

import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { MatDialogRef } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  template: `
    <div *ngIf="!isCodeSent">
      <h2>Авторизация</h2>
      <input type="text" [(ngModel)]="phoneNumber" placeholder="Введите номер телефона" />
      <button (click)="sendCode()">Продолжить</button>
    </div>
    <div *ngIf="isCodeSent">
      <h2>Введите код</h2>
      <input type="text" [(ngModel)]="verificationCode" placeholder="Введите код из SMS" />
      <button (click)="verifyCode()">Подтвердить</button>
    </div>
  `,
})
export class LoginFormComponent {
  phoneNumber: string = '';
  verificationCode: string = '';
  isCodeSent: boolean = false;

  constructor(private authService: AuthService, private dialogRef: MatDialogRef<LoginFormComponent>) {}

  sendCode() {
    this.authService.sendVerificationCode(this.phoneNumber).subscribe(success => {
      if (success) {
        this.isCodeSent = true;
        console.log('Код отправлен на номер:', this.phoneNumber);
      } else {
        console.log('Ошибка отправки кода');
      }
    });
  }

  verifyCode() {
    this.authService.verifyCode(this.phoneNumber, this.verificationCode).subscribe(success => {
      if (success) {
        console.log('Успешный вход');
        this.authService.login(); // Успешная авторизация
        this.dialogRef.close(); // Закрываем диалог после успешного входа
      } else {
        console.log('Ошибка входа');
      }
    });
  }
}
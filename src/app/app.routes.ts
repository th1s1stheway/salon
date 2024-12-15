import {  Routes } from '@angular/router';
import { GlavnayaComponent } from './pages/glavnaya/glavnaya.component';
import { KomandaComponent } from './pages/komanda/komanda.component';
import { AcademyManicureComponent } from './pages/academy-manicure/academy-manicure.component';
import { NashiRabotiComponent } from './pages/nashi-raboti/nashi-raboti.component';
import { OkrashivanieComponent } from './pages/uslugi/okrashivanie/okrashivanie.component';

export const routes: Routes = [
  { path: '', component: GlavnayaComponent, pathMatch: 'full' }, // Путь по умолчанию
  { path: 'komanda', component: KomandaComponent,},
  { path: 'academy', component: AcademyManicureComponent,},
  { path: 'nashi-raboti', component: NashiRabotiComponent,},
  { path: 'okrashivanie', component: OkrashivanieComponent,},
  //{ path: 'about', component: AboutComponent },
  //{ path: '**', redirectTo: '' } // Переадресация на главную страницу для несуществующих маршрутов
];


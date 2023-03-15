import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main/main-page.component';

const routes: Routes = [
  {
    path: 'home',
    children: [
      { path: '', loadChildren: () => import('./pages/main/main-page.module').then(m => m.MainPageModule) },
    ],
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BedroomComponent } from './bedroom/bedroom.component';
import { BathroomComponent } from './bathroom/bathroom.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LivingroomComponent } from './livingroom/livingroom.component';
import { SofaComponent } from './sofa/sofa.component';
import { DeskComponent } from './desk/desk.component';

const routes: Routes = [
  // { path: 'bedroom/:message', component: BedroomComponent },
  { path: 'bedroom', component: BedroomComponent, data: { animation: 'bedroom' } },
  { path: 'bathroom', component: BathroomComponent, data: { animation: 'bathroom' } },
  { path: '',   redirectTo: '/', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent },
  {
    path: 'livingroom',
    component: LivingroomComponent, // this is the component with the <router-outlet> in the template
    children: [
      {
        path: 'sofa', // child route path
        component: SofaComponent, // child route component that the router renders
      },
      {
        path: 'desk',
        component: DeskComponent, // another child route component that the router renders
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

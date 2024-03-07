import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TurbineBoardComponent } from './turbine-board/turbine-board.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/turbines', pathMatch: 'full' },
  { path: 'turbines', component: TurbineBoardComponent },
  //{ path: 'turbines/:id', component: TurbineComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

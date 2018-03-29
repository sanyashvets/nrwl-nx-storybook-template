import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { MymoduleModule } from '@stratyfy/mymodule';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MymoduleModule],
  exports: [RouterModule, MymoduleModule]
})
export class AppRoutingModule {}

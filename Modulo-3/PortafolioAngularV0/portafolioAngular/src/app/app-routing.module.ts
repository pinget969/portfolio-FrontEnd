import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditemComponent } from './components/additem/additem.component';
import { ItemsComponent } from './components/items/items.component';
 

const routes: Routes = [
  {
    path: '', //index
    component: ItemsComponent //componente a cargar
  },
  {
    path: 'add',
    component: AdditemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

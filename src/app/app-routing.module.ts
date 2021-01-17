import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeleteComponent } from './pages/delete/delete.component';
import { IndexComponent } from './pages/index/index.component';
import { StoreComponent } from './pages/store/store.component';
import { UpdateComponent } from './pages/update/update.component';

const routes: Routes = [
  { path: 'index', component: IndexComponent },
  { path: 'store', component: StoreComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'delete', component: DeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

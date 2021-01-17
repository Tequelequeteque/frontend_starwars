import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IndexComponent } from './pages/index/index.component';
import { UpdateComponent } from './pages/update/update.component';
import { DeleteComponent } from './pages/delete/delete.component';
import { StoreComponent } from './pages/store/store.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TableComponent } from './components/table/table.component';
import { CharacterComponent } from './components/character/character.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import apiService from './services/api.service';
@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    UpdateComponent,
    DeleteComponent,
    StoreComponent,
    NavbarComponent,
    TableComponent,
    CharacterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: "Api", useValue: apiService },],
  bootstrap: [AppComponent]
})
export class AppModule { }

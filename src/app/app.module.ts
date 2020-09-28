import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';


import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';
import  { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import  {MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    DragDropModule,
    FormsModule,
    HttpClientModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  providers: [
    //Sayfa içerisinde birden fazla servisimiz olabilir.
    //Servisler içerisinde bir değişiklik yapılması gerektiğinde tüm servisleri değiştirmek yerine
    //Sadece app.module.ts içerisinde yer alan servisi değiştirmek pratik bir yöntem.
    {provide:'apiUrl' , useValue:'https://api.limantech.com/todo'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

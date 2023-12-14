import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Componants/header/header.component';
import { RecipeCardComponent } from './Componants/recipe-card/recipe-card.component';
import { HomeComponent } from './Componants/home/home.component';
import { RecipeDetailsComponent } from './Componants/recipe-details/recipe-details.component';
import { FavoriteComponent } from './Componants/favorite/favorite.component';
import { SearchPipe } from './pipes/search.pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeCardComponent,
    HomeComponent,
    RecipeDetailsComponent,
    FavoriteComponent,
    SearchPipe,
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    FormsModule, 
    AppRoutingModule,
    NgxPaginationModule ,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './course/course.service';
import { AuthorService } from './services/author.service';
import { FavoriteComponent } from './favorite/favorite.component';

@NgModule({
  declarations: [AppComponent, CourseComponent, FavoriteComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration(), CourseService, AuthorService],
  bootstrap: [AppComponent],
})
export class AppModule {}

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
import { PanelComponent } from './panel/panel.component';
import { AssignmentLikeComponent } from './assignment-like/assignment-like.component';
import { LikeComponent } from './like/like.component';

@NgModule({
  declarations: [AppComponent, CourseComponent, FavoriteComponent, PanelComponent, AssignmentLikeComponent, LikeComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration(), CourseService, AuthorService],
  bootstrap: [AppComponent],
})
export class AppModule {}

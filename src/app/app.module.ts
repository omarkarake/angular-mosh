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
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';

@NgModule({
  declarations: [AppComponent, CourseComponent, FavoriteComponent, PanelComponent, AssignmentLikeComponent, LikeComponent, InputFormatDirective, ZippyComponent, ContactFormComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [provideClientHydration(), CourseService, AuthorService],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: "home",component: HomeComponent,
  },
  {
    path: "gallery",component: GalleryComponent
  },
  {
    path: "feedback",component: FeedbackComponent
  },
  {
    path: "about",component: AboutComponent
  },
  {
    path: "", redirectTo: "home", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';

import { UpdatePostComponent } from './update-post/update-post.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BottomBarComponent } from './bottom-bar/bottom-bar.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { UpdatePageComponent } from './update-page';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TalemComponent } from './talem/talem.component';
import { TalemPicturesComponent } from './talem-pictures/talem-pictures.component';
import { HomeHeroImageComponent } from './home-hero-image/home-hero-image.component';


@NgModule({
  declarations: [
    AppComponent,
    UpdatePostComponent,
    TopBarComponent,
    BottomBarComponent,
    SideBarComponent,
    UpdatePageComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TalemComponent,
    TalemPicturesComponent,
    HomeHeroImageComponent,
  ],
  imports: [
    BrowserModule,
    TooltipModule.forRoot(),
    CarouselModule.forRoot(),
    RouterModule.forRoot([ {path: 'talem-updates', component: UpdatePageComponent}, {path: 'about', component: AboutComponent
    }, {path: 'talem-pictures', component: TalemPicturesComponent}, {path: '', component: HomeComponent}, ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

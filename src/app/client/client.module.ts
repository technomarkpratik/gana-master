import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { FooterComponent } from './component/footer/footer.component';
import { SongdetailComponent } from './component/songdetail/songdetail.component';
import { ProfileComponent } from './component/profile/profile.component';
import { SubscribeComponent } from './component/subscribe/subscribe.component';
import { MainsectionComponent } from './component/mainsection/mainsection.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { RegristerComponent } from './pages/regrister/regrister.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SongboxComponent } from './pages/songbox/songbox.component';
import { Ng2CompleterModule } from "ng2-completer";
import { NewreleaseComponent } from './component/newrelease/newrelease.component';
import { FeaturedartistsComponent } from './component/featuredartists/featuredartists.component';
import { HomebannerComponent } from './component/homebanner/homebanner.component';
import { TrandingsongsComponent } from './component/trandingsongs/trandingsongs.component';
import { SongsliderComponent } from './component/songslider/songslider.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SongdetailComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    SubscribeComponent,
    MainsectionComponent,
    RegristerComponent,
    SongboxComponent,
    NewreleaseComponent,
    FeaturedartistsComponent,
    HomebannerComponent,
    TrandingsongsComponent,
    SongsliderComponent
  ],
  imports: [
    CommonModule,
    ClientRoutingModule,
    SlickCarouselModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    Ng2CompleterModule
  ]
})
export class ClientModule { }

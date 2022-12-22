import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { FooterComponent } from './component/footer/footer.component';
import { SongsliderComponent } from './component/songslider/songslider.component';
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
@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SongsliderComponent,
    SongdetailComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    SubscribeComponent,
    MainsectionComponent,
    RegristerComponent,
    SongboxComponent
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

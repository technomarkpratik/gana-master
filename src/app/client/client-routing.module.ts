import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './component/footer/footer.component';


import { ProfileComponent } from './component/profile/profile.component';

import { SubscribeComponent } from './component/subscribe/subscribe.component';
import { LoginComponent } from './pages/login/login.component';
import { RegristerComponent } from './pages/regrister/regrister.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { MainsectionComponent } from './component/mainsection/mainsection.component';
import { SongboxComponent } from './pages/songbox/songbox.component';
import { SongdetailComponent } from './component/songdetail/songdetail.component';
import { NewreleaseComponent } from './component/newrelease/newrelease.component';
import { FeaturedartistsComponent } from './component/featuredartists/featuredartists.component';
import { TrandingsongsComponent } from './component/trandingsongs/trandingsongs.component';
import { SongsliderComponent } from './component/songslider/songslider.component';


const routes: Routes = [

{path:'home', redirectTo:'home',pathMatch:'full'},
{path:'',component:HomeComponent,children:[
  {path:'', redirectTo:'mainsecion',pathMatch:'full'},
  {path:'mainsecion',component:MainsectionComponent,children:[
    {path:'songslider', component:SongsliderComponent},
    {path:'', redirectTo:'songslider',pathMatch:'full'},
    {path:'trandingsong', component:TrandingsongsComponent},
    {path:'newrelease', component:NewreleaseComponent},
    {path:'featuredartists', component:FeaturedartistsComponent},
  ]},
  
  {path:'songbox/:id',component:SongboxComponent},
  {path:'songdetail/:id',component:SongdetailComponent},

  
  {path:'profile',component:ProfileComponent,
  children: [
    {path:'subscribe',component:SubscribeComponent},
    {path:'', redirectTo:'subscribe',pathMatch:'full'},
  ]
},  
]},

{path:'login',component:LoginComponent},
{path:'register',component:RegristerComponent},





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }

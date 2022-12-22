import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './component/footer/footer.component';


import { ProfileComponent } from './component/profile/profile.component';
import { SongdetailComponent } from './component/songdetail/songdetail.component';
import { SongsliderComponent } from './component/songslider/songslider.component';
import { SubscribeComponent } from './component/subscribe/subscribe.component';
import { LoginComponent } from './pages/login/login.component';
import { RegristerComponent } from './pages/regrister/regrister.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { MainsectionComponent } from './component/mainsection/mainsection.component';
import { SongboxComponent } from './pages/songbox/songbox.component';

const routes: Routes = [

{path:'home', redirectTo:'/home',pathMatch:'full'},
{path:'',component:HomeComponent,children:[
  {path:'', redirectTo:'mainsecion',pathMatch:'full'},
  {path:'mainsecion',component:MainsectionComponent},
  {path:'songbox',component:SongboxComponent},
  {path:'profile',component:ProfileComponent,
  children: [
    {path:'subscribe',component:SubscribeComponent}
  ]
},
]},
{path:'header',component:HeaderComponent},
{path:'footer',component:FooterComponent},
{path:'songslider',component:SongsliderComponent},
{path:'songdetail',component:SongdetailComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegristerComponent},





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }

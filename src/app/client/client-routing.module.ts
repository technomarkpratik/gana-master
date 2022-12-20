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

const routes: Routes = [

{path:'home', redirectTo:'/home',pathMatch:'full'},
{path:'',component:HomeComponent},
{path:'header',component:HeaderComponent},
{path:'footer',component:FooterComponent},
{path:'songslider',component:SongsliderComponent},
{path:'songdetail',component:SongdetailComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegristerComponent},
{path:'profile',component:ProfileComponent,
  children: [
    {path:'subscribe',component:SubscribeComponent}
  ]
},



];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }

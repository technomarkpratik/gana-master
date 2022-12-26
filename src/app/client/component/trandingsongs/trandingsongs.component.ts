import { Component } from '@angular/core';
import { HomepageService } from 'src/app/services/homepage.service';

@Component({
  selector: 'app-trandingsongs',
  templateUrl: './trandingsongs.component.html',
  styleUrls: ['./trandingsongs.component.scss']
})
export class TrandingsongsComponent {
  slides:any = {};
  isfeatching = false;
  constructor(private homeservice:HomepageService){
  }
  ngOnInit(){
    this.displaysongs();
  } 
  displaysongs(){
    this.isfeatching = true ;
    this.homeservice.songlist().subscribe((data) =>{
      this.isfeatching = false ;
     this.receivesongs(data) });
  }
  receivesongs(data:any){
     this.slides =  (data.data.data);
  }

  slideConfigbanner = {
    infinite: true,
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay:true,
     centerMode: true,
     speed: 300,
     centerPadding: '20%', 
                };
  slideConfig = {  infinite: true,
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    autoplay:true,
                    // centerMode: true,
                    speed: 300,
                    centerPadding: '60px', 
                    responsive: [
                      {
                        breakpoint: 1100,
                        settings: {
                          slidesToShow: 4,
                        }
                      },
                      {
                        breakpoint: 767,
                        settings: {
                          slidesToShow: 2,
                        }
                      },
                    ]
                  };
}

import { Component } from '@angular/core';
import { HomepageService } from 'src/app/services/homepage.service';

@Component({
  selector: 'app-featuredartists',
  templateUrl: './featuredartists.component.html',
  styleUrls: ['./featuredartists.component.scss']
})
export class FeaturedartistsComponent {
  artists : any = {};
  slides:any = {};
  isfeatching = false;
  constructor(private homeservice:HomepageService){
  }
  ngOnInit(){
    this.displayartist();

  }
  displayartist(){
    this.homeservice.artistlist().subscribe((data) => this.receiveartist(data) );
  }
  receiveartist(data:any){
     this.artists =  (data.data.data);
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

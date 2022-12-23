import { Component, Input } from '@angular/core';
import { HomepageService } from '../../../services/homepage.service';

@Component({
  selector: 'app-songslider',
  templateUrl: './songslider.component.html',
  styleUrls: ['./songslider.component.scss']
})
export class SongsliderComponent {
  artists : any = {};
  slides:any = {};
  constructor(private homeservice:HomepageService){
  }
  ngOnInit(){
    this.displayartist();
    this.displaysongs();
  } 
  displayartist(){
    this.homeservice.artistlist().subscribe((data) => this.receiveartist(data) );
  }
  receiveartist(data:any){
     this.artists =  (data.data.data);
  }

  displaysongs(){
    this.homeservice.songlist().subscribe((data) => this.receivesongs(data) );
  }
  receivesongs(data:any){
     this.slides =  (data.data.data);
  }
  // slides = [
  //   {id:1, img: "/assets/image/shiv.jpg", song_name : 'dill ne'},
  //   {id:1, img: "/assets/image/bhakti-song.jpg", song_name : 'dill ne'},
  //   {id:1, img: "/assets/image/gym.webp", song_name : 'workout'},
  //   {id:1, img: "/assets/image/shiv.jpg", song_name : 'dill ne'},
  //   {id:1, img: "/assets/image/bhakti-song.jpg", song_name : 'bhakti'},
  //   {id:1, img: "/assets/image/shiv.jpg", song_name : 'shiv dhun'},
  //   {id:1, img: "/assets/image/bhakti-song.jpg", song_name : 'bhakti song'},
  //   {id:1, img: "/assets/image/gym.webp", song_name : 'workout'},
  // ];
  // artists = [
  //   {id:1, img: "/assets/image/artist_1.webp", song_name : 'Arijit Singh'},
  //   {id:1, img: "/assets/image/artist_1.webp", song_name : 'Arijit Singh'},
  //   {id:1, img: "/assets/image/artist_1.webp", song_name : 'Arijit Singh'},
  //   {id:1, img: "/assets/image/artist_1.webp", song_name : 'Arijit Singh'},
  //   {id:1, img: "/assets/image/artist_1.webp", song_name : 'Arijit Singh'},
  //   {id:1, img: "/assets/image/artist_1.webp", song_name : 'Arijit Singh'},
  //   {id:1, img: "/assets/image/artist_1.webp", song_name : 'Arijit Singh'},
  // ];
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
import { Component } from '@angular/core';

@Component({
  selector: 'app-songslider',
  templateUrl: './songslider.component.html',
  styleUrls: ['./songslider.component.scss']
})
export class SongsliderComponent {
  slides = [
    {img: "/assets/image/shiv.jpg", song_name : 'dill ne'},
    {img: "/assets/image/bhakti-song.jpg", song_name : 'dill ne'},
    {img: "/assets/image/gym.webp", song_name : 'workout'},
    {img: "/assets/image/shiv.jpg", song_name : 'dill ne'},
    {img: "/assets/image/bhakti-song.jpg", song_name : 'bhakti'},
    {img: "/assets/image/shiv.jpg", song_name : 'shiv dhun'},
    {img: "/assets/image/bhakti-song.jpg", song_name : 'bhakti song'},
    {img: "/assets/image/gym.webp", song_name : 'workout'},
  ];
  artists = [
    {img: "/assets/image/artist_1.webp", song_name : 'Arijit Singh'},
    {img: "/assets/image/artist_1.webp", song_name : 'Arijit Singh'},
    {img: "/assets/image/artist_1.webp", song_name : 'Arijit Singh'},
    {img: "/assets/image/artist_1.webp", song_name : 'Arijit Singh'},
    {img: "/assets/image/artist_1.webp", song_name : 'Arijit Singh'},
    {img: "/assets/image/artist_1.webp", song_name : 'Arijit Singh'},
    {img: "/assets/image/artist_1.webp", song_name : 'Arijit Singh'},
  ];
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
                    slidesToShow: 6,
                    slidesToScroll: 1,
                    autoplay:true,
                    // centerMode: true,
                    speed: 300,
                    centerPadding: '60px', 
                  };


}
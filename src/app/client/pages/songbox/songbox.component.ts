import { Component } from '@angular/core';

@Component({
  selector: 'app-songbox',
  templateUrl: './songbox.component.html',
  styleUrls: ['./songbox.component.scss']
})
export class SongboxComponent {
  songdetail = [
    {
      img :'../assets/image/user.jpg',
      title: 'rate lambiya',
      artist : 'arjit sing'
    },
    {
      img :'../assets/image/user.jpg',
      title: 'rate lambiya',
      artist : 'arjit sing'
    },
    {
      img :'../assets/image/user.jpg',
      title: 'rate lambiya',
      artist : 'arjit sing'
    },
    {
      img :'../assets/image/user.jpg',
      title: 'rate lambiya',
      artist : 'arjit sing'
    },
    {
      img :'../assets/image/user.jpg',
      title: 'rate lambiya',
      artist : 'arjit sing'
    },
    {
      img :'../assets/image/user.jpg',
      title: 'rate lambiya',
      artist : 'arjit sing'
    },
    {
      img :'../assets/image/user.jpg',
      title: 'rate lambiya',
      artist : 'arjit sing'
    },    
  ]
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

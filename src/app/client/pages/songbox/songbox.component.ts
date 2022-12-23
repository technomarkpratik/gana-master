import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomepageService } from 'src/app/services/homepage.service';

@Component({
  selector: 'app-songbox',
  templateUrl: './songbox.component.html',
  styleUrls: ['./songbox.component.scss']
})
export class SongboxComponent {
  id:number | undefined;
  songs:any = {};
  orders: any = {};
  slides : any = {};
  constructor(router: ActivatedRoute,private homeservice:HomepageService,
) {
    router.paramMap.subscribe(params => {
      this.id = router.snapshot.params['id'];
      this.ngOnInit();      
  });
  }  
  ngOnInit(){   
    this.orders = this.displaysongs();
    this.displayslider();
  }
  displaysongs(){
    this.homeservice.songlis(this.id).subscribe((data) => this.receivesongs(data) );
  }
  receivesongs(data:any){
     this.songs =  (data.data);
  }

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
  displayslider(){
    this.homeservice.songlist().subscribe((data) => this.slideresponse(data) );
  }
  slideresponse(data:any){
     this.slides =  (data.data.data);
  }
}

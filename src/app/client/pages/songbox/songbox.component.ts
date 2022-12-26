import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  dataid :number| undefined;
  text="";
  constructor(router: ActivatedRoute,private homeservice:HomepageService,private route:Router
) {
    router.paramMap.subscribe(params => {
      this.id = router.snapshot.params['id'];
      this.displaysongs();        
  });
  } 
  ngOnInit(){   
  // this.displaysongs();  
  }

  displaysongs(){
    this.homeservice.songlis(this.id).subscribe((data) => this.receivesongs(data) );   
  }
  receivesongs(data:any){
     this.songs =  (data.data);   
  }

  submit(id:any){  
   this.homeservice.updatedata(id);
  console.log("songbox send id : "+ id);
  }
 
  updateText(text:string){
    this.homeservice.updatedata(text);
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
}

import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomepageService } from 'src/app/services/homepage.service';

@Component({
  selector: 'app-songdetail',
  templateUrl: './songdetail.component.html',
  styleUrls: ['./songdetail.component.scss']
})
export class SongdetailComponent {
  public toggle_play = false;
  public toggle_play_sticky = false;
  id:number | undefined;
  songs:any = {};
  songqueue:any = {};
  orders: any = {};
  constructor(router: ActivatedRoute,private homeservice:HomepageService,
    ) {
    router.paramMap.subscribe(params => {
      this.id = router.snapshot.params['id'];
      this.ngOnInit();      
  });
  }  
  ngOnInit(){   
    this.orders = this.displaysongs();
    this.displaysong();
  }
  displaysongs(){
    this.homeservice.songlis(this.id).subscribe((data) => this.receivesongs(data) );
  }
  receivesongs(data:any){
     this.songs =  (data.data);
  }
 displaysong(){
    this.homeservice.songlist().subscribe((data) => this.receive(data) );
  }
  receive(data:any){
     this.songqueue =  (data.data.data);
  }
public checkVisited() {
   this.toggle_play = !this.toggle_play;
   this.toggle_play_sticky = !this.toggle_play_sticky;
}
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

}

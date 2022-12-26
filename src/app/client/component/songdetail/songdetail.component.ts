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
  id !:number ;
  songlists!:any;
  songqueue:any = {};
  list: any = {};
// ids = localStorage.getItem('ids');
ids !: any;
test !: string;
text = "";
  constructor(router: ActivatedRoute,private homeservice:HomepageService,
    ) {
  this.ngOnInit();  
  }  
  ngOnInit(){   

   this.displaysonglist();
   this.displaysong();
  }

  displaysong(){
    this.homeservice.share.subscribe(x => {
      this.text = x,
      // location.reload();
    })
    this.homeservice.songlis(this.text).subscribe((data:any) => this.receivelist(data) );
    
  }
  receivelist(data:any){
     this.songlists =  (data.data);
     console.log("receive id : "+ this.songlists.id)
  }

  displaysonglist(){
    this.homeservice.songlist().subscribe((data) => this.receive(data) );
  }

  receive(data:any){
     this.songqueue =  (data.data.data);
  }
public checkVisited() {
   this.toggle_play = !this.toggle_play;
   this.toggle_play_sticky = !this.toggle_play_sticky;
}

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-songdetail',
  templateUrl: './songdetail.component.html',
  styleUrls: ['./songdetail.component.scss']
})
export class SongdetailComponent {


  public toggle_play = false;
  public toggle_play_sticky = false;
  


public checkVisited() {
   // reverse the value of property
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

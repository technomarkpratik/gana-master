import { Component } from '@angular/core';
import { HomepageService } from 'src/app/services/homepage.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  songs:any = {};
  artists : any = {};
  albums = [
    'English',
    'Hindi',
    'Telugu',
    'Punjabi',
    'Tamil',
    'Kannada',
    'Bhojpuri',
    'Malayalam',
    'Marathi',
    'Bengali',
    'Gujarati Songs',
    'Haryanvi'
  ]
  // artists = [
  // 'Arijit Singh',
  // 'Neha Kakkar',
  // 'Honey Singh',
  // 'Atif Aslam',
  // 'A R Rahman',
  // 'Lata Mangeshkar',
  // 'Kishore Kumar',
  // 'Armaan Malik',
  // 'Sunidhi Chauhan',
  // 'Nusrat Fateh Ali Khan',
  // 'Mohammed Rafi',
  // 'Guru Randhawa',
  // 'Justin Bieber',
  // 'BTS'
  // ]

   
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
     this.songs =  (data.data.data);
  }
}

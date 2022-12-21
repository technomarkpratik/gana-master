import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
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
  artists = [
  'Arijit Singh',
  'Neha Kakkar',
  'Honey Singh',
  'Atif Aslam',
  'A R Rahman',
  'Lata Mangeshkar',
  'Kishore Kumar',
  'Armaan Malik',
  'Sunidhi Chauhan',
  'Nusrat Fateh Ali Khan',
  'Mohammed Rafi',
  'Guru Randhawa',
  'Justin Bieber',
  'BTS'
  ]
}

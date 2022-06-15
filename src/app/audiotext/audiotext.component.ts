import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'app/_services/token-storage.service';
import { AudiotextService } from './audiotext.service';

@Component({
  selector: 'app-audiotext',
  templateUrl: './audiotext.component.html',
  styleUrls: ['./audiotext.component.scss']
})
export class AudiotextComponent implements OnInit {
  public source: any;
  constructor( protected audioTextservice:AudiotextService,private token: TokenStorageService,private router: Router) { }

  ngOnInit(): void {
   

  }
  
}

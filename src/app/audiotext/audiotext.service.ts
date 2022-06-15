import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Audiotext } from './audiotext';

@Injectable({
  providedIn: 'root'
})
export class AudiotextService {
  url =  'http://localhost:3000/';
  
  constructor(private httpClient: HttpClient) { }
  AudioTextList() {
    return this.httpClient.get<Audiotext[]>(this.url + "audiotexts");
  }
}

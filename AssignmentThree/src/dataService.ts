import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Artist } from './Artist';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  private url: string = 'https://prog2005.it.scu.edu.au/ArtGalley/';

  //get request on api
  public getAllArtists(): Observable<Artist> {
    return this.http.get<Artist>(this.url);
  }
}

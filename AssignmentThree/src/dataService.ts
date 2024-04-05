import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Artist } from './Artist';

// Enums for artist class
enum Gender {
  Female = 'Female',
  Male = 'Male',
  Unspecified = 'Unspecified',
}

enum ArtworkType {
  Painting = 'painting',
  Sculpture = 'sculpture',
  Photograph = 'photograph',
  VideoArt = 'video art',
  DigitalArt = 'digital art',
  Printmaking = 'printmaking',
}

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  private url: string = 'https://prog2005.it.scu.edu.au/ArtGalley/';

  //get request on api
  public getAllArtists(): Observable<Artist> {
    return this.http.get<Artist>(this.url);
  }

  public deleteArtist(artistName: string): Observable <Artist> {
    const url = `${this.url}/${artistName}`;
    return this.http.delete<Artist>(url);
  }

  
  addArtist(
    name: string,
    dob: Date,
    gender: Gender,
    artworkType: ArtworkType,
    contactInfo: string,
    exhibitionDate: Date,
    specialNotes: string,
    isFeaturedArtist: number,
  ): Observable<Artist> {
    return this.http.post<Artist>(this.url, {
      name: name,
      dob: dob,
      gender: gender,
      artwork_type: artworkType,
      contact_info: contactInfo,
      exhibition_date: exhibitionDate,
      special_notes: specialNotes,
      is_featured_artist: isFeaturedArtist,
    });
  }
}

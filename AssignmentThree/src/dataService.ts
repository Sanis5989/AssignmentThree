import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Artist } from './Artist';
import { ArtistPut } from './ArtistPut';

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
  getAllArtists(): Observable<Artist> {
    return this.http.get<Artist>(this.url);
  }

  //delete fuction to call on api
  deleteArtist(artistName: string): Observable<ArtistPut> {
    return this.http.delete<ArtistPut>(this.url + artistName);
  }

  //update artist function to call on api
  updateArtist(
    updateName: string,
    artistPut: ArtistPut
  ): Observable<ArtistPut> {
    return this.http.put<ArtistPut>(this.url + updateName, artistPut);
  }

  //funcion to call on api to add an artist
  addArtist(
    name: string,
    dob: Date,
    gender: Gender,
    artworkType: ArtworkType,
    contactInfo: string,
    exhibitionDate: Date,
    specialNotes: string,
    isFeaturedArtist: number
  ): Observable<Artist> {
    //http post req on api
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

  //function to search artist on api
  searchArtist(name: string): Observable<Artist> {
    //http get req on api with name of artist
    return this.http.get<Artist>(this.url + name);
  }
}

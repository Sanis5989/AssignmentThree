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

export class Artist {
  artist_id: number;
  name: string;
  dob: Date;
  gender: Gender;
  artwork_type: ArtworkType;
  contact_info: string;
  exhibition_date: Date;
  is_featured_artist: number;

  constructor(
    artist_id: number,
    name: string,
    dob: Date,
    gender: Gender,
    artwork_type: ArtworkType,
    contact_info: string,
    exhibition_date: Date,
    is_featured_artist: number
  ) {
    this.artist_id = artist_id;
    this.name = name;
    this.dob = dob;
    this.gender = gender;
    this.artwork_type = artwork_type;
    this.contact_info = contact_info;
    this.exhibition_date = exhibition_date;
    this.is_featured_artist = is_featured_artist;
  }
}

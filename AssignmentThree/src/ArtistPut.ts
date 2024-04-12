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

export class ArtistPut {
  dob: Date;
  gender: Gender;
  artwork_type: ArtworkType;
  contact_info: string;
  exhibition_date: Date;
  is_featured_artist: number;

  constructor(
    dob: Date,
    gender: Gender,
    artwork_type: ArtworkType,
    contact_info: string,
    exhibition_date: Date,

    is_featured_artist: number
  ) {
    this.dob = dob;
    this.gender = gender;
    this.artwork_type = artwork_type;
    this.contact_info = contact_info;
    this.exhibition_date = exhibition_date;
    this.is_featured_artist = is_featured_artist;
  }
}

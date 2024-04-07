import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Data } from '@angular/router';
import { Artist } from 'src/Artist';
import { DataService } from 'src/dataService';

@Component({
  selector: 'app-update-artists',
  templateUrl: './update-artists.page.html',
  styleUrls: ['./update-artists.page.scss'],
})
export class UpdateArtistsPage implements OnInit {
  constructor(private dataService: DataService) {}
  //creating an emptyarray of artists
  artists: Artist[] = [];
  updateFormData!: FormGroup;

  //initializing an new artist object to hold update details

  ngOnInit() {
    //loading all artists on array on window load
    this.loadArtists();

    //form control and validations
    this.updateFormData = new FormGroup({
      updateName: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      artWorkType: new FormControl('', Validators.required),
      contactInfo: new FormControl('', Validators.required),
      exhibitionDate: new FormControl('', Validators.required),
      specialNotes: new FormControl(''),
      isFeaturedArtist: new FormControl(false),
      isRegularArtist: new FormControl(true),
    });
  }
  //function to get artists from api and assign it to the empty artists array.
  loadArtists(): void {
    this.dataService.getAllArtists().subscribe(
      (response: any) => {
        // Check if the response is an array
        if (Array.isArray(response)) {
          // If it is, assign it to artists
          this.artists = response;
        } else {
          // If not, log an error
          console.error('Unexpected response:', response);
        }
      },
      (error) => {
        console.log('Error fetching artists:', error);
      }
    );
  }

  //update function to call update method from data service
  updateArtist() {
    let artist = new Artist(
      50000,
      this.updateFormData.value.name,
      this.updateFormData.value.dob,
      this.updateFormData.value.gender,
      this.updateFormData.value.artworkType,
      this.updateFormData.value.contactInfo,
      this.updateFormData.value.exhibitionDate,
      this.updateFormData.value.specialNotes,
      this.updateFormData.value.isFeaturedArtist
    );
    this.dataService
      .updateArtist(
        this.updateFormData.value.updateArtist,
        this.updateFormData.value.name,
        this.updateFormData.value.dob,
        this.updateFormData.value.gender,
        this.updateFormData.value.artworkType,
        this.updateFormData.value.contactInfo,
        this.updateFormData.value.exhibitionDate,
        this.updateFormData.value.specialNotes,
        this.updateFormData.value.isFeaturedArtist
      )
      .subscribe(
        (d: any) => {
          alert('Artist has been updated in the database.');
          window.location.reload();
        },
        (err: any) => {
          alert('err');
          console.log(err.message);
        }
      );
    console.log(artist);
  }

  //function to get the updated featured artist or regular artist input field
  updateCheckboxValue(event: any, checkboxType: string) {
    if (checkboxType === 'featured') {
      this.updateFormData.get('isRegularArtist')?.setValue(false);
    } else if (checkboxType === 'regular') {
      this.updateFormData.get('isFeaturedArtist')?.setValue(false);
    }
  }
}

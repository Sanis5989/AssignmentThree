import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Data } from '@angular/router';
import { Artist } from 'src/Artist';
import { ArtistPut } from 'src/ArtistPut';
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
  deleteFormData!: FormGroup;
  deleteName!: string;
  //initializing an new artist object to hold update details

  ngOnInit() {
    //loading all artists on array on window load
    this.loadArtists();

    //form control and validations
    this.updateFormData = new FormGroup({
      updateName: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      artworkType: new FormControl('', Validators.required),
      contactInfo: new FormControl('', Validators.required),
      exhibitionDate: new FormControl('', Validators.required),
      isFeaturedArtist: new FormControl(false),
      isRegularArtist: new FormControl(true),
    });
    this.deleteFormData = new FormGroup({
      deleteName: new FormControl('', Validators.required),
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
    this.dataService
      .updateArtist(
        this.updateFormData.value.updateName,
        new ArtistPut(
          this.updateFormData.value.dob,
          this.updateFormData.value.gender,
          this.updateFormData.value.artworkType,
          this.updateFormData.value.contactInfo,
          this.updateFormData.value.exhibitionDate,
          this.updateFormData.value.isFeaturedArtist
        )
      )
      .subscribe(
        () => {
          alert('Artist has been updated in the database.');
          console.log(
            this.updateFormData.value.dob,
            this.updateFormData.value.gender,
            this.updateFormData.value.artworkType,
            this.updateFormData.value.contactInfo,
            this.updateFormData.value.exhibitionDate,
            this.updateFormData.value.isFeaturedArtist,
            this.updateFormData.value.updateName
          );
        },
        (err: any) => {
          alert('err');
          console.log(err.message);
        }
      );
  }

  //function to get the updated featured artist or regular artist input field
  updateCheckboxValue(event: any, checkboxType: string) {
    if (checkboxType === 'featured') {
      this.updateFormData.get('isRegularArtist')?.setValue(false);
    } else if (checkboxType === 'regular') {
      this.updateFormData.get('isFeaturedArtist')?.setValue(false);
    }
  }

  //fuction to delete artitts
  deleteArtist(name: string) {
    this.dataService.deleteArtist(name).subscribe(
      (d: any) => {
        console.log('deleted');
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}

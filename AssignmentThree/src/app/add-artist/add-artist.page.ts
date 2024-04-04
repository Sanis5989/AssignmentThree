import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Artist } from 'src/Artist';
import { DataService } from 'src/dataService';

@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.page.html',
  styleUrls: ['./add-artist.page.scss'],
})
export class AddArtistPage implements OnInit {
  formData!: FormGroup;
  id: number = 0;
  newArtist!: Artist;
  isFeaturedArtist: boolean = false;
  constructor(private dataService: DataService) {}

  //function to get the updated featured artist input field
  updateCheckboxValue(event: any) {
    // Update the value of isFeaturedArtist based on checkbox state
    this.isFeaturedArtist = event.detail.checked ? true : false;
  }

  ngOnInit() {
    this.formData = new FormGroup({
      name: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      artWorkType: new FormControl('', Validators.required),
      contactInfo: new FormControl('', Validators.required),
      exhibitionDate: new FormControl('', Validators.required),
      isFeaturedArtist: new FormControl(''),
    });
  }

  onSubmit() {
    console.log(this.formData.value);
    this.addArtist();
  }

  addArtist() {
    if (this.formData.valid) {
      // this.newArtist = new Artist(
      //   this.id++,
      //   this.formData.value.name,
      //   this.formData.value.dob,
      //   this.formData.value.gender,
      //   this.formData.value.artWorkType,
      //   this.formData.value.contactInfo,
      //   this.formData.value.exhibitionDate,
      //   this.formData.value.isFeaturedArtist
      // );
      // console.log(this.newArtist);
      this.dataService
        .addArtist(
          this.formData.value.name,
          this.formData.value.dob,
          this.formData.value.gender,
          this.formData.value.artWorkType,
          this.formData.value.contactInfo,
          this.formData.value.exhibitionDate,
          this.formData.value.isFeaturedArtist
        )
        .subscribe(
          (d: any) => {
            alert('Artist has been added to the database.');
            window.location.reload();
          },
          (err: any) => {
            alert('err');
            console.log(err.message);
          }
        );
    } else {
      console.log('Form data is invalid');
    }
  }
}

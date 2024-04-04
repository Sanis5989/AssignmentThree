import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-artist',
  templateUrl: './add-artist.page.html',
  styleUrls: ['./add-artist.page.scss'],
})
export class AddArtistPage implements OnInit {
  formData!: FormGroup;

  constructor() { }

  ngOnInit() {
    this.formData = new FormGroup({
      name: new FormControl('', Validators.required),
      dob: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      artWorkType: new FormControl('', Validators.required),
      contactInfo: new FormControl('', Validators.required),
      exhibitionDate: new FormControl('', Validators.required),
      isFeaturedArtist: new FormControl('')

    });
  }

  onSubmit() {
    console.log(this.formData.value);
  }
}

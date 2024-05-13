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
  isRegularArtist: boolean = false;
  showSuccessModal = false;
  showErrorModal = false;


  constructor(private dataService: DataService) {}

  // //function to get the updated featured artist or regular artist input field
  updateCheckboxValue(event: any, checkboxType: string) {
    if (checkboxType === 'featured') {
      this.formData.get('isRegularArtist')?.setValue(false);
    } else if (checkboxType === 'regular') {
      this.formData.get('isFeaturedArtist')?.setValue(false);
    }
  }
  ngOnInit() {
    //initializing form group with form controls and validators
    this.formData = new FormGroup({
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

  //function to handle form submission
  onSubmit() {
    console.log(this.formData.value);
    this.addArtist();
  }

  //function to add the artist
  addArtist() {
    if (this.formData.valid) { //check if the form is valid
      this.dataService      //call dataservice method to add artist
        .addArtist(
          this.formData.value.name,
          this.formData.value.dob,
          this.formData.value.gender,
          this.formData.value.artWorkType,
          this.formData.value.contactInfo,
          this.formData.value.exhibitionDate,
          this.formData.value.specialNotes,
          this.formData.value.isFeaturedArtist
        )
        .subscribe(
          () => {
             this.showSuccessModal = true; // show the modal if artist added successfully
             console.log(this.showSuccessModal); //success callback
          },   
          (err: any) => { // error callback
            alert('err');  // show alert for error
            console.log(err.message);  // log error message to console
            this.showErrorModal = true;
          }
        );
    } else {
      console.log('Form data is invalid');
    }
  }

  //function to reset form data
  resetData() {
    this.formData.reset();
  }
}

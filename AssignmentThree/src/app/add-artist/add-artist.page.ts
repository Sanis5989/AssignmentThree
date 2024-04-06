import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Artist } from 'src/Artist';
import { DataService } from 'src/dataService';
import { __awaiter } from 'tslib';

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

  async canDismiss(data?: any, role?: string){
        return role !== 'gesture';
  }

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

  onSubmit() {
    console.log(this.formData.value);
    this.addArtist();
  }

  
  addArtist() {
    if (this.formData.valid) {
  
      
       this.dataService
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

  //reset form data
  resetData(){
    this.formData.reset();
  }
}

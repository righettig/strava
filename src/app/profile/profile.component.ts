import { Component, OnInit } from '@angular/core';
import { IProfile, Profile } from './models/profile';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { ProfileApiService } from './profile-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private profileApi: ProfileApiService) { }

  ngOnInit() {
    this.profileApi.get().subscribe(data => {
      if (!data) {
        this.profile = new Profile();
        this.profile.name = this.auth.user.username;  

      } else {
        this.profile = data;
      }
      
      this.profileForm = this.fb.group({
        name:        [this.profile.name,       [Validators.required, Validators.maxLength(32)]],
        email:       [this.profile.email,       Validators.email],
        birthday:     this.profile.birthday,
        gender:       this.profile.gender,
        location:    [this.profile.location,    Validators.maxLength(64)],
        primaryClub: [this.profile.primaryClub, Validators.maxLength(64)],
        weight:       this.profile.weight,
        vanityURL:   [this.profile.vanityURL,   Validators.maxLength(256)],
        profileBio:  [this.profile.profileBio,  Validators.maxLength(512)]
      });

      const nameControl = this.profileForm.get("name");
      nameControl.valueChanges.subscribe(value => {
        this.validate(nameControl);
      })

      // TODO: validate email using observable (debounceTime)?
    })
  }

  save() {
    this.profile.name        = this.profileForm.get("name").value;
    this.profile.email       = this.profileForm.get("email").value;
    this.profile.birthday    = this.profileForm.get("birthday").value;
    this.profile.gender      = this.profileForm.get("gender").value;
    this.profile.location    = this.profileForm.get("location").value;
    this.profile.primaryClub = this.profileForm.get("primaryClub").value;
    this.profile.weight      = this.profileForm.get("weight").value;
    this.profile.vanityURL   = this.profileForm.get("vanityURL").value;
    this.profile.profileBio  = this.profileForm.get("profileBio").value;

    this.profileApi.update(this.profile).subscribe(success => {
      if (success) {
        this.profileForm.markAsPristine();
        this.profileForm.markAsUntouched();
        
        alert("Profile saved successfully!");

      } else {
        alert("There was a problem while saving the profile.")
      }
    })
  }

  validate(c: AbstractControl) {
    this.nameValidationMsg = "";
    if ((c.touched || c.dirty) && !c.valid) {
      this.nameValidationMsg = "Please enter your name";
    }
  }

  nameValidationMsg: string; 

  profileForm: FormGroup;
  profile: IProfile;

}

import { Component, OnInit } from '@angular/core';
import { IProfile, Profile } from './models/profile';
import { FormGroup, FormBuilder } from '@angular/forms';
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
        name:        this.profile.name,
        birthday:    this.profile.birthday,
        gender:      this.profile.gender,
        location:    this.profile.location,
        primaryClub: this.profile.primaryClub,
        weight:      this.profile.weight,
        vanityURL:   this.profile.vanityURL,
        profileBio:  this.profile.profileBio
      });
    })
  }

  save() {
    this.profile.name        = this.profileForm.get("name").value;
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

  profileForm: FormGroup;
  profile: IProfile;

}

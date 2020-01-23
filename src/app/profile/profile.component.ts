import { Component, OnInit } from '@angular/core';
import { IProfile, Profile } from './models/profile';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { ProfileApiService } from './profile-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
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
      
      this.profileForm = new FormGroup({
        name:        new FormControl(this.profile.name),
        birthday:    new FormControl(this.profile.birthday),
        gender:      new FormControl(this.profile.gender),
        location:    new FormControl(this.profile.location),
        primaryClub: new FormControl(this.profile.primaryClub),
        weight:      new FormControl(this.profile.weight),
        vanityURL:   new FormControl(this.profile.vanityURL),
        profileBio:  new FormControl(this.profile.profileBio)
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

    debugger;
    this.profileApi.update(this.profile).subscribe(success => {
      if (success) {
        alert("Profile saved successfully!");

      } else {
        alert("There was a problem while saving the profile.")
      }
    })
  }

  profileForm: FormGroup;
  profile: IProfile;

}

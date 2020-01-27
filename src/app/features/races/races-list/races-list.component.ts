import { Component, OnInit, ViewChild } from '@angular/core';
import { tap, debounceTime, distinctUntilChanged, skip } from 'rxjs/operators';
import { NgModel } from '@angular/forms';
import { RacesApiService } from '../services/races-api.service';

@Component({
  templateUrl: './races-list.component.html',
  styleUrls: ['./races-list.component.scss']
})
export class RacesListComponent implements OnInit {

  @ViewChild(NgModel, { static: true } ) public query: NgModel;

  constructor(
    private racesApi: RacesApiService) { }

  ngOnInit() {
    this.racesApi.getRaces().subscribe((data: any) => {
      this.races = data.races.map(el => el.race);
      this.filteredRaces = this.races;
    })
  }

  ngAfterViewInit() {
    this.query.valueChanges.pipe(
      skip(1),
      debounceTime(300),
      distinctUntilChanged(),
      tap(data => console.log('search: ' + data)),
    ).subscribe(value => {
      this.search(value);
    })
  }

  private search(query) {
    this.filteredRaces = 
      this.races.filter(
        el => el.name.toLowerCase().indexOf(query.toLowerCase()) > -1);
  }

  filteredRaces;
  races;

  // for AOT to work fine
  query_string: string;

}

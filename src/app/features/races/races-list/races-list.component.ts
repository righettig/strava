import { Component, OnInit, ViewChild } from '@angular/core';
import { tap, debounceTime, distinctUntilChanged, skip } from 'rxjs/operators';
import { NgModel } from '@angular/forms';
import { RacesApiService } from '../services/races-api.service';
import { ActivatedRoute } from '@angular/router';
import { IResolvedRaces } from '../models/race';

@Component({
  templateUrl: './races-list.component.html',
  styleUrls: ['./races-list.component.scss']
})
export class RacesListComponent implements OnInit {

  @ViewChild(NgModel, { static: false } ) public query: NgModel;

  constructor(
    private route: ActivatedRoute,

    // not needed is using a resolver
    /*private racesApi: RacesApiService*/) { }

  ngOnInit() {
    const resolvedData: IResolvedRaces = this.route.snapshot.data['resolvedData'];
    this.errorMessage = resolvedData.error;
    
    this.races = resolvedData.races;
    this.filteredRaces = this.races;
    
    // NB: if not using a resolver
    // this.racesApi.getRaces().subscribe((data: any) => {
    //   this.races = data;
    //   this.filteredRaces = this.races;
    // })
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

  errorMessage: string;

  // for AOT to work fine
  query_string: string;

}

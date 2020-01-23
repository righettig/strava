import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, debounceTime, distinctUntilChanged, skip } from 'rxjs/operators';
import { NgModel } from '@angular/forms';

const localUrl = 'api/races.json';

@Component({
  selector: 'app-races-list',
  templateUrl: './races-list.component.html',
  styleUrls: ['./races-list.component.scss']
})
export class RacesListComponent implements OnInit {

  @ViewChild(NgModel, { static: true } ) public query: NgModel;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getRaces();
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

  getRaces() {
    this.http.get(localUrl).pipe(
      tap(data => console.log('getRaces: ' + JSON.stringify(data))),
    ).subscribe((data: any) => {
      this.races = data.races.map(el => el.race);
      this.filteredRaces = this.races;
    })
  }

  private search(query) {
    this.filteredRaces = 
      this.races.filter(
        el => el.name.toLowerCase().indexOf(query.toLowerCase()) > -1);
  }

  filteredRaces;
  races;

}

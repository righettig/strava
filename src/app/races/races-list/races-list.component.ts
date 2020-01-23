import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

const localUrl = 'api/races.json';
const TIMEOUT = 5000;

@Component({
  selector: 'app-races-list',
  templateUrl: './races-list.component.html',
  styleUrls: ['./races-list.component.scss']
})
export class RacesListComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getRaces();
  }

  search(query) {
    this.filteredRaces = 
      this.races.filter(
        el => el.name.toLowerCase().indexOf(query.toLowerCase()) > -1);
  }

  getRaces() {
    this.http.get(localUrl).pipe(
      tap(data => console.log('search: ' + JSON.stringify(data))),
    ).subscribe((data: any) => {
      this.races = data.races.map(el => el.race);
      this.filteredRaces = this.races;
    })
  }

  filteredRaces;
  races;

}

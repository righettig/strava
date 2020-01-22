import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  @Input() filterBy: string;
  @Output() onFilter: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit() {
  }

  doFilter(category) {
    this.onFilter.emit(category);
  }

}

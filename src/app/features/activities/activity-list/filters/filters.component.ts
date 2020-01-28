import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FiltersComponent {

  @Input() filterBy: string;
  @Output() onFilter: EventEmitter<string> = new EventEmitter<string>();

  doFilter(category) {
    this.onFilter.emit(category);
  }

}

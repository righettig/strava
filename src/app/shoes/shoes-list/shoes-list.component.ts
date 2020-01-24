import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-shoes-list',
  templateUrl: './shoes-list.component.html',
  styleUrls: ['./shoes-list.component.scss']
})
export class ShoesListComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.shoesForm = this.fb.group({
    });
  }

  shoesForm: FormGroup;

}

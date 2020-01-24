import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms';
import { filter, groupBy, debounceTime } from 'rxjs/operators';

@Component({
  templateUrl: './shoes-list.component.html',
  styleUrls: ['./shoes-list.component.scss']
})
export class ShoesListComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.shoesForm = this.fb.group({
      shoes: this.fb.array([this.buildShoe()])
    });

    this.shoesForm.valueChanges.pipe(
      debounceTime(1000)
    ).subscribe((value) => {
      if (this.shoesForm.valid) {
        this.save();
      }
    });
  }

  buildShoe(): FormGroup {
    let group = this.fb.group({
      brand: ["", Validators.required],
      model: ["", Validators.required],
      nickname: "",
      notes: ""
    });

    this.setValidation(group, "brand", "Please enter a brand");
    this.setValidation(group, "model", "Please enter a model");

    return group;
  }

  addShoe() {
    this.shoes.push(this.buildShoe());
  }

  save() {
    this.saving = true;
    setTimeout(() => {
      this.saving = false;
    }, 800);
  }

  get shoes(): FormArray {
    return <FormArray>this.shoesForm.get("shoes");
  }

  private setValidation(group, field, msg) {
    const c = group.get(field);
    c.valueChanges.subscribe(value => {
      c.validationMsg = "";
      if ((c.touched || c.dirty) && !c.valid) {
        c.validationMsg = msg;
      }
    })
  }

  shoesForm: FormGroup;
  saving = false;

}

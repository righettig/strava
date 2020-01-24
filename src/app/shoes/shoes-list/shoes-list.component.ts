import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { filter } from 'rxjs/operators';

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
      brand:    ["", Validators.required],
      model:    ["", Validators.required],
      nickname:  "",
      notes:     "",
    });

    const brandControl = this.shoesForm.get("brand");
    brandControl.valueChanges.subscribe(value => {
      this.validateBrand(brandControl);
    })

    const modelControl = this.shoesForm.get("model");
    modelControl.valueChanges.subscribe(value => {
      debugger;
      this.validateModel(modelControl);
    })

    // this.shoesForm.valueChanges.pipe(
    //   filter(el => el.)
    // )
    //   subscribe(value => {
    //   debugger;
    // })
  }

  save() {

  }

  validateBrand(c: AbstractControl) {
    this.brandValidationMsg = "";
    if ((c.touched || c.dirty) && !c.valid) {
      this.brandValidationMsg = "Please enter a brand";
    }
  }

  validateModel(c: AbstractControl) {
    this.modelValidationMsg = "";
    if ((c.touched || c.dirty) && !c.valid) {
      this.modelValidationMsg = "Please enter a model";
    }
  }

  brandValidationMsg: string; 
  modelValidationMsg: string; 

  shoesForm: FormGroup;

}

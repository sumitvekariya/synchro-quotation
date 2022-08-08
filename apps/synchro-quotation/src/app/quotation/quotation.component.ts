import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, UntypedFormArray, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-quotation',
  templateUrl: './quotation.component.html',
  styleUrls: ['./quotation.component.scss']
})
export class QuotationComponent implements OnInit {

  quoteForm: FormGroup;
  get panelsFormArray(): FormArray {
    return <FormArray>this.quoteForm.get('panels');
  }

  constructor() {
    this.quoteForm = new FormGroup({
      panels: new FormArray([this.createPanelFormGroup()]),
    });
  }

  ngOnInit(): void {
  }

  createPanelFormGroup() {
    return new FormGroup({
      name: new FormControl<string>('Test Panel'),
      fabrication: new FormArray([this.createProductFormGroup()]),
      incomer: new FormArray([this.createProductFormGroup()]),
      outgoing: new FormArray([this.createProductFormGroup()])
    })
  }

  addPanel() {
    const p = this.createPanelFormGroup();
    this.panelsFormArray.push(p);
    // this.panelsFormArray.controls.push(p);
  }

  setPanelName(event: any, p: AbstractControl) {
    p.get('detail')?.setValue(event.target?.innerText)
  }

  createProductFormGroup() {
    return new FormGroup({
      detail: new FormControl(''),
      qty: new FormControl<number>(1),
      company: new FormControl(''),
      price: new FormControl<number>(0)
    })
  }

  getFabricationFormControl(i: number):FormArray {
    return <FormArray>this.quoteForm.get(`panels.${i}.fabrication`);
  }
  getIncomerFormControl(i: number):FormArray {
    return <FormArray>this.quoteForm.get(`panels.${i}.incomer`);
  }
  getOutgoingFormControl(i: number):FormArray {
    return <FormArray>this.quoteForm.get(`panels.${i}.outgoing`);
  }

}

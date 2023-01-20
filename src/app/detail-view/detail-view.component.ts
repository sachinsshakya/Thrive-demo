import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

export interface PeriodicElement {
  name: string;
  at: string;
  by: string;
  description: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Project1', description:'Loreum ipsum', at: '17/01/2023', by: 'Sachin'},
  { name: 'Project2', description:'Loreum ipsum', at: '17/01/2023', by: 'Sachin'},
]

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  displayedColumns: string[] = [ 'name','description', 'at', 'by', 'action'];
  dataSource = ELEMENT_DATA;

  constructor(private _formBuilder: FormBuilder) {}

}

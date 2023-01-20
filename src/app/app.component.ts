import { Component } from '@angular/core';

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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'thrive-demo';
  displayedColumns: string[] = [ 'name','description', 'at', 'by', 'action'];
  dataSource = ELEMENT_DATA;

  showDetail : boolean = false;
  

  showDetails(){
    this.showDetail = !this.showDetail;
  }
}

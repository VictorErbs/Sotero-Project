import { Component } from '@angular/core';
import { FormComponent } from './form/form.component';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], 
  standalone: true,  
  imports: [FormComponent]  
})
export class AppComponent {
  title = 'proj-sotero';
}

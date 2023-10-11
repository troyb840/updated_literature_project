import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchForm: FormGroup;
  selectedOutputFormat: string;

  outputFormats = ['IEEE', 'ACM', 'APA'];

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      authorQuery: [''],
      yearQuery: [''],
      titleQuery: [''],
      sectionQuery: [''],
      fullCitationQuery: ['']
    });
  }

  search() {
    const formData = this.searchForm.value;
    console.log('Search initiated', formData);
  }

  changeOutputFormat(event: any) {
    this.selectedOutputFormat = event.target.value;
  }
}

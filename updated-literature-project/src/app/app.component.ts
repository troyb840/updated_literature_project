
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
      authorQuery: ['', [Validators.pattern('^[a-zA-Z ,.]*$')]],
      yearQuery: ['', [Validators.pattern('^[0-9]*$')]],
      titleQuery: ['', [Validators.pattern('^[a-zA-Z0-9 ]*$')]],
      sectionQuery: ['', [Validators.pattern('^[a-zA-Z0-9 ]*$')]]
    });
  }

  search() {
    if (this.searchForm.valid) {
      const formData = this.searchForm.value;
      console.log('Search initiated', formData);
    }
  }

  changeOutputFormat(event: any) {
    this.selectedOutputFormat = event.target.value;
  }
}


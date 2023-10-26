
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormService } from './form.service';
import {ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchForm: FormGroup;
  selectedOutputFormat: string;

  outputFormats = ['IEEE', 'ACM', 'APA'];

  constructor(
    private fb: FormBuilder,
    private formService: FormService
  ) {
    this.searchForm = this.fb.group({
      authorQuery: ['', [Validators.pattern('^[a-zA-Z ,.]*$')]],
      yearQuery: ['', [Validators.pattern('^[0-9]*$')]],
      titleQuery: ['', [Validators.pattern('^[a-zA-Z0-9 ]*$')]],
      sectionQuery: ['', [Validators.pattern('^[a-zA-Z0-9 ]*$')]]
    });
  }
  public test: any 


  search() {
    if (this.searchForm.valid) {
      const formData = this.searchForm.value;
      console.log('Search initiated', formData);
    }
  }

  changeOutputFormat(event: any) {
    this.selectedOutputFormat = event.target.value;
  }

  ngOnInit(){
    //this.getTest()
    this.getKeywordTest()
    this.getAuthor("Au")
  }

  // Test to get student json   
  // getTest() {
  //   this.formService.getTest().subscribe(
  //       data => { console.log(data)},
  //       err => console.error(err),
  //       () => console.log('finished loading')
  //   );
  // }

  //Test Keyword search 
  getKeywordTest() {
    this.formService.getKeywordTest().subscribe(
        data => { console.log(data)},
        err => console.error(err),
        () => console.log('finished loading')
    );
  }

  //Production
  //Author Keyword Search 
  getAuthor(author: string){
    this.formService.getAuthor(author).subscribe(
      data => { console.log(data)},
      err => console.error(err),
      () => console.log('finished loading')
  );
}

  }




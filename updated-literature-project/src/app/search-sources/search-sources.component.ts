import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FormService } from '../form.service';


@Component({
  selector: 'app-search-sources',
  templateUrl: './search-sources.component.html',
  styleUrls: ['./search-sources.component.css']
})
export class SearchSourcesComponent {
  searchForm: FormGroup;
  selectedOutputFormat: string;
  title = 'sources';
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
      
      ////Enter code to query database

      //Author Search 
     // this.getAuthor(formData.authorQuery)

     //Section Search
     //this.getSection(formData.sectionQuery)

     //Year Search
     //this.getYear(formData.yearQuery)

     //Title Search
     //this.getTitle(formData.titleQuery) 
    }
  }

  changeOutputFormat(event: any) {
    this.selectedOutputFormat = event.target.value;
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

   //Production
  //Year Keyword Search 
  getYear(year: number){
    this.formService.getYear(year).subscribe(
      data => { console.log(data)},
      err => console.error(err),
      () => console.log('finished loading')
  );
 }

    //Production
  //Section Keyword Search 
  getSection(section: string){
    this.formService.getSection(section).subscribe(
      data => { console.log(data)},
      err => console.error(err),
      () => console.log('finished loading')
  );
 }

     //Production
  //Title Keyword Search 
  getTitle(title: string){
    this.formService.getTitle(title).subscribe(
      data => { console.log(data)},
      err => console.error(err),
      () => console.log('finished loading')
  );
 }
 ngOnInit(){
  //this.getTest()
  //this.getAuthor("Au")
}

  

}

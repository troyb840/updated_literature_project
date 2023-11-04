import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateCiteService } from '../create-cite.service';

@Component({
  selector: 'app-create-cite',
  templateUrl: './create-cite.component.html',
  styleUrls: ['./create-cite.component.css']
})
export class CreateCiteComponent implements OnInit {
  instruction = "Enter a Citation Record";
  data: string
  createForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private createCiteService: CreateCiteService
    ) 
  {
    this.createForm = this.fb.group({
      authors: ['', [Validators.pattern('^[a-zA-Z ,.]*$'), Validators.required]],
      author_1: ['', [Validators.pattern('^[a-zA-Z ,.]*$'), Validators.required]],
      author_2: ['', [Validators.pattern('^[a-zA-Z ,.]*$')]],
      author_3: ['', [Validators.pattern('^[a-zA-Z ,.]*$')]],
      author_4: ['', [Validators.pattern('^[a-zA-Z ,.]*$')]],
      author_5: ['', [Validators.pattern('^[a-zA-Z ,.]*$')]],
      author_6: ['', [Validators.pattern('^[a-zA-Z ,.]*$')]],
      author_7: ['', [Validators.pattern('^[a-zA-Z ,.]*$')]],
      author_8: ['', [Validators.pattern('^[a-zA-Z ,.]*$')]],
      author_9: ['', [Validators.pattern('^[a-zA-Z ,.]*$')]],
      author_10: ['', [Validators.pattern('^[a-zA-Z ,.]*$')]],
      year: ['', [Validators.pattern('^[0-9]*$')]],
      title: ['', [Validators.pattern('^[a-zA-Z0-9 ,.]*$'), Validators.required]],
      publication: ['', [Validators.pattern('^[a-zA-Z0-9 ,.]*$'), Validators.required]],
      page_numbers: ['', [Validators.pattern('^[0-9 \-]*$')]],
      section: ['', [Validators.pattern('^[a-zA-Z ,.]*$'), Validators.required]],
      full_citation: ['', [Validators.pattern('^[a-zA-Z0-9 ,.]*$')]]

    });

  

  }

  ngOnInit(){ 
    this.data = "test";
  } 

  reloadPage(){
    window.location.reload();
  }

  create() {
    if (this.createForm.valid) {
      const formData = this.createForm.value;
      console.log('Create initiated', formData);
      console.log(this.createForm.value.authors)
    }
  }

}

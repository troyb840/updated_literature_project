import { Component, OnInit } from '@angular/core';
import { SourcesService } from '../sources.service';

@Component({
  selector: 'app-list-sources',
  templateUrl: './list-sources.component.html',
  styleUrls: ['./list-sources.component.css']
})
export class ListSourcesComponent implements OnInit{
  public sources: any;

  constructor(private _myService: SourcesService) { }
ngOnInit() {
    this.getSources();
}
getSources(){
  this._myService.getSources().subscribe(
    data => {this.sources = data},
    err => console.error(err),
    () => console.log ('finished loading')
  
);
}
}

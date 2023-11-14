import { Component, OnInit } from '@angular/core';
import { SourcesService } from '../sources.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-sources',
  templateUrl: './list-sources.component.html',
  styleUrls: ['./list-sources.component.css']
})
export class ListSourcesComponent implements OnInit{
  public sources: any;
  sortedSources: any[]; // This will hold the sorted sources
  selectedSortOption: string;


  constructor(private route: ActivatedRoute, private _myService: SourcesService) { }

  ngOnInit(): void {
    this.route.params.subscribe(() => {
      // Fetch sources from your service (replace 'getSources()' with your actual method)
      this.sources = this._myService.getSources();
      // Initialize with default sort option
      this.selectedSortOption = 'ascendingAuthor';
      this.sortSources();
    });

    this.getSources();
  }



getSources(){
  this._myService.getSources().subscribe(
    data => {this.sources = data},
    err => console.error(err),
    () => console.log ('finished loading')
  
);
}
sortSources(): void {
  // Sort sources based on the selected option
  this.sortedSources = this.sources.slice(); // Create a copy to avoid modifying the original array

  switch (this.selectedSortOption) {
    case 'ascendingAuthor':
      this.sortedSources.sort((a, b) => a.authors.localeCompare(b.authors));
      break;
    case 'descendingAuthor':
      this.sortedSources.sort((a, b) => b.authors.localeCompare(a.authors));
      break;
    case 'ascendingTitle':
      this.sortedSources.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case 'descendingTitle':
      this.sortedSources.sort((a, b) => b.title.localeCompare(a.title));
      break;
    case 'ascendingYear':
      this.sortedSources.sort((a, b) => a.year.localeCompare(b.year));
      break;
    case 'descendingYear':
      this.sortedSources.sort((a, b) => b.year.localeCompare(a.year));
      break;
    case 'ascendingSection':
      this.sortedSources.sort((a, b) => a.section.localeCompare(b.section));
      break;
    case 'adecendingSection':
       this.sortedSources.sort((a, b) => b.section.localeCompare(b.section));
       break;
    case 'ascendingCitation':
       this.sortedSources.sort((a, b) => a.full_citation.localeCompare(b.full_citation));
       break;
    case 'descendingCitation':
       this.sortedSources.sort((a, b) => b.full_citation.localeCompare(a.full_citation));
       break;
  
              
    // Add cases for other sorting options
    default:
      break;
  }
}
}

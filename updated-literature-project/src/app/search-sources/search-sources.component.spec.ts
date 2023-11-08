import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSourcesComponent } from './search-sources.component';

describe('SearchSourcesComponent', () => {
  let component: SearchSourcesComponent;
  let fixture: ComponentFixture<SearchSourcesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchSourcesComponent]
    });
    fixture = TestBed.createComponent(SearchSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ListSourcesComponent } from './list-sources/list-sources.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import { HomeComponent } from './home/home.component';
import { SearchSourcesComponent } from './search-sources/search-sources.component';
import { HttpClientModule } from '@angular/common/http';
import { SourcesService } from './sources.service';
import { FormService } from './form.service';


const appRoutes: Routes = [
  {
path: ' ',
component: HomeComponent},

{
  path: 'listSources',
  component: ListSourcesComponent
},
{
  path: 'searchSources',
  component: SearchSourcesComponent
}];


@NgModule({
  declarations: [
    AppComponent,
    ListSourcesComponent,
    NavigationMenuComponent,
    HomeComponent,
    SearchSourcesComponent    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule, 
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule

  ],
  providers: [SourcesService, FormService],
  bootstrap: [AppComponent]
})
export class AppModule { }

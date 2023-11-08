import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//we know that response will be in JSON format
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};



@Injectable()
export class FormService {

    constructor(private http:HttpClient) {}

    //API Functions 
    getTest(){
        return this.http.get('http://localhost:8000/api_test')
    }

    getKeywordTest(){
        return this.http.get('http://localhost:8000/keyword_test_prod')

    }

    getAuthor(keyword: string){
       return this.http.get('http://localhost:8000/author/'+ keyword)

    }

    getYear(keyword: number){
        return this.http.get('http://localhost:8000/year/'+ keyword)
 
     }

     getTitle(keyword: string){
        return this.http.get('http://localhost:8000/title/'+ keyword)
 
     }

     getSection(keyword: string){
        return this.http.get('http://localhost:8000/section/'+ keyword)
 
     }



}
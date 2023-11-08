import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

const httpOptions = {
    headers: new HttpHeaders ({ 'Content-Type': 'application/json'})
};

@Injectable()
export class SourcesService {
    constructor(private http:HttpClient){}

    getSources() {
        return this.http.get('http://localhost:8000/citations');
    }


    getSource(sourceID: string) {
        return this.http.get('http://localhost:8000/sources/' + sourceID)

    }

    


}
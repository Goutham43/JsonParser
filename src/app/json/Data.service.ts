import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { DataEntity } from './Data.entity';
import {Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class DataService {
    jsonPath: string ="assets/data.json";
    
    constructor(private http: Http) { }

    public getJSON(): Observable<DataEntity> {
        return this.http.get(this.jsonPath)
                        .map((res:any) => res.json());

    }
}
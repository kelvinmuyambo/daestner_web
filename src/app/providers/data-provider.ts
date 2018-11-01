import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataProvider {
    base: string = './src/assets/data/';
    constructor(private http: HttpClient) {
    }

    Get(file: string, func: any) {
        this.http.get(this.base + file).subscribe((result) => func(result));
    }
}

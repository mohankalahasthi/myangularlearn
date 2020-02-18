import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient ,HttpParams} from '@angular/common/http';
@Injectable()

export class  DemoService {

    constructor(private httpclient:HttpClient){

    }
    getComment(): Observable<any>{
        return this.httpclient.get("https://jsonplaceholder.typicode.com/posts/1/comments");
    };

    getCommentByParameter(){
        // let param1 = new HttpParams().set('userId','1');
        // {

        // }
        return this.httpclient.get(`https://jsonplaceholder.typicode.com/posts?userId=2`);
    };
}
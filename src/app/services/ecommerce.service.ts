import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';



@Injectable()
export class EcommerceService {
    private subject = new Subject<any>();

    receiveProducts(item){
        // console.log(item);
       this.subject.next(item)
    }
    getproduct(): Observable<any>{
        return this.subject.asObservable();
    }

}



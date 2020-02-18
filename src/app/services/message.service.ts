import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
    private subject = new Subject<any>();
    private message:string;

    recieveMessage(message: string){
        this.subject.next({ text : message})
    }
    clearMessage(){
        this.subject.next()
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }

    public set setMessage(message){
        this.message = message;
    }
    public get gettMessage(){
        return this.message;
    }


}
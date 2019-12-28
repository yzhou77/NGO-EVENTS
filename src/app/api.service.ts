import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {IMyuser, IEvent, IRegistration} from './interfaces';
import {Observable,throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class APIService {
    private _url:string = "http://127.0.0.1:8000/api/";
    constructor(private http: HttpClient) { }
    errorHandler(error: HttpErrorResponse){
        return throwError(error.message || "server Error");
    }

    getMyusers(): Observable<IMyuser[]>{
        return this.http.get<IMyuser[]>(this._url+'users/')
        .pipe(catchError(this.errorHandler));
    }
    newMyuser(userData) {
        return this.http.post<any>(this._url+'users/', userData);
      }

    deleteMyuser(id):Observable<IMyuser[]>{
        console.log(this._url + 'users/' + id);
        return this.http.delete<IMyuser[]>(this._url + 'users/'+ id);
    }

    editMyuser(id,userData) {
        console.log(this._url + 'users/' + id);
        return this.http.put<any>(this._url + 'users/' +id, userData);
      }

    getMyuserid(id): Observable<IMyuser[]>{
        return this.http.get<IMyuser[]>(this._url + 'users/' + id)
        .pipe(catchError(this.errorHandler));
    }

    getEvents(): Observable<IEvent[]>{
        return this.http.get<IEvent[]>(this._url+'events/')
        .pipe(catchError(this.errorHandler));
    }
    newEvent(userData) {
        return this.http.post<any>(this._url+ 'events/', userData);
      }

    deleteEvent(id):Observable<IEvent[]>{
        console.log(this._url + 'events/' + id);
        return this.http.delete<IEvent[]>(this._url + 'events/'+ id);
    }

    editEvent(id,userData) {
        console.log(this._url + 'events/' + id);
        return this.http.put<any>(this._url + 'events/' +id, userData);
      }

    getEventid(id): Observable<IEvent[]>{
        return this.http.get<IEvent[]>(this._url + 'events/' + id)
        .pipe(catchError(this.errorHandler));
    }
    newRegistration(userData) {
        return this.http.post<any>(this._url+ 'registrations/', userData);
      }

}

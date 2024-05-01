import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private apiUrl = 'http://127.0.0.1:5000/dashboard';

  constructor(private http: HttpClient) {}

  private handleError(error: any): Observable<any> {
    console.error('An error occurred:', error);
    return throwError(error);
  }

  getDataByEndYear(year: number): Observable<any> {
    const url = `${this.apiUrl}/end-year/${year}`;
    return this.http.get<any>(url).pipe(
      catchError(this.handleError)
    );
  }

  getDataByTopic(keyword: string): Observable<any> {
    const params = new HttpParams().set('keyword', keyword);
    const url = `${this.apiUrl}/topic`;
    return this.http.get<any>(url, { params }).pipe(
      catchError(this.handleError)
    );
  }

  getDataBySector(keyword: string): Observable<any> {
    const params = new HttpParams().set('keyword', keyword);
    const url = `${this.apiUrl}/sector`;
    return this.http.get<any>(url, { params }).pipe(
      catchError(this.handleError)
    );
  }

  getDataByRegion(keyword: string): Observable<any> {
    const params = new HttpParams().set('keyword', keyword);
    const url = `${this.apiUrl}/region`;
    return this.http.get<any>(url, { params }).pipe(
      catchError(this.handleError)
    );
  }

  getDataByPestle(keyword: string): Observable<any> {
    const params = new HttpParams().set('keyword', keyword);
    const url = `${this.apiUrl}/pestle`;
    return this.http.get<any>(url, { params }).pipe(
      catchError(this.handleError)
    );
  }

  getDataBySource(keyword: string): Observable<any> {
    const params = new HttpParams().set('keyword', keyword);
    const url = `${this.apiUrl}/source`;
    return this.http.get<any>(url, { params }).pipe(
      catchError(this.handleError)
    );
  }

  getDataBySwot(keyword: string): Observable<any> {
    const params = new HttpParams().set('keyword', keyword);
    const url = `${this.apiUrl}/swot`;
    return this.http.get<any>(url, { params }).pipe(
      catchError(this.handleError)
    );
  }

  getDataByCountry(keyword: string): Observable<any> {
    const params = new HttpParams().set('keyword', keyword);
    const url = `${this.apiUrl}/country`;
    return this.http.get<any>(url, { params }).pipe(
      catchError(this.handleError)
    );
  }

  getDataByCity(keyword: string): Observable<any> {
    const params = new HttpParams().set('keyword', keyword);
    const url = `${this.apiUrl}/city`;
    return this.http.get<any>(url, { params }).pipe(
      catchError(this.handleError)
    );
  }
}

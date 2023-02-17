import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class PeriodService {
  private baseUrl = "http://localhost:8086/api/period/";

  constructor(private http: HttpClient) {}
  private token = "eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJoZ2ZlaGdAZ21haWwuY29tIiwiaWF0IjoxNjc2NTU5Nzc4LCJleHAiOjE2NzY2NDYxNzh9.sKBkQjMwyYwT9ff1ObxCKb64W4DtRfoHSdriRw_XK_lZ24E0aHWnhMZS_Gk-cki_";
  private headers = {"Authorization": `Bearer ${this.token}`}

  public getAllPeriods(): Observable<any> {
    return this.http
        .get(this.baseUrl,{ headers: this.headers, responseType: "json", })
  }

  public savePeriod(period:any) {
    return this.http
        .post(this.baseUrl, period, { headers: this.headers, responseType: "json", })
  }

}

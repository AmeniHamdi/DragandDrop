import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private baseUrl = "localhost:8086/api/employees/";
  constructor(private http: HttpClient) {}

  getAllEmployees():Observable<any> {
    return this.http
        .get(this.baseUrl + "retrieve-all-users", { responseType: "text" })
        .pipe(catchError(this.handleError));
}

private handleError(httpError: HttpErrorResponse) {
  let message: string = "";
  if (httpError.error instanceof ProgressEvent) {
      message = "Network error";
  }
  // if (httpError.error instanceof ErrorEvent) {
  //   message = httpError.error.message;
  //   // A client-side or network error occurred. Handle it accordingly.
  //   console.error('An error occurred:', httpError.error.message);
  // }
  else {
      message = JSON.parse(httpError.error).message;
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
          `Backend returned code ${httpError.status}, ` +
              `body was: ${httpError.error}`
      );
  }
  // Return an observable with a user-facing error message.
  return throwError(
      "Something bad happened; please try again later. Error Message- " +
          message
  );
}
}

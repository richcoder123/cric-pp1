import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayerdetailsService {

  constructor(private http: HttpClient) {}

  getIndiaWcTeam() {
    return this.http.get('https://3kmubbgzki.execute-api.ap-south-1.amazonaws.com/Development')
  }
}

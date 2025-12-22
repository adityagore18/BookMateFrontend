import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUserDetails(){
      return this.http.get('https://bookmatebackend-2.onrender.com/profile');
  }

  updateProfile(id:string,record:any){
    return this.http.put('https://bookmatebackend-2.onrender.com/profile/'+id,record);
  }
}

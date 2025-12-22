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



// https://res.cloudinary.com/disrmkbzs/image/upload/v1766392129/bookmate/profileImages/bookmate/profileImages/gb9qiovmixradvdls93p
//https://res.cloudinary.com/disrmkbzs/image/upload/v1766397676/bookmate/profileImages/gb9qiovmixradvdls93p.jpg
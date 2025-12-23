import { Component } from '@angular/core';
import { BookDetails } from '../book-details.model';
import { BookService } from '../book.service';
import { Request } from '../request.model';
import { UserService } from '../user.service';
@Component({
  selector: 'app-incoming-request',
  templateUrl: './incoming-request.component.html',
  styles: [
  ]
})
export class IncomingRequestComponent {
   myRequests:any;
   ownerName=""
   constructor(private bookService:BookService,private userService:UserService ){
    bookService.getIncomingRequest().subscribe((data)=>{
      console.log(data)
      this.myRequests=data as Request[];
      for(let r of this.myRequests){
        bookService.getBookName(r.bookId).subscribe(data=>{
          r.bookDetails =data;
        })
      }
      for(let r of this.myRequests){
        bookService.getName(r.requesterId).subscribe(data=>{
          r.requesterDetails=data;
        })
      }
    })
    console.log(this.myRequests);
   }

   acceptRequest(requestObj:any){
    this.userService.acceptRequest(requestObj._id).subscribe((data)=>{
      console.log(data)
      alert("Notify "+requestObj.requesterDetails.name +", Your request is Accepted..");
      location.reload();
    })
   }

   rejectRequest(requestObj:any){
    this.userService.rejectRequest(requestObj._id).subscribe((data)=>{
      console.log(data);
      alert("Notify "+requestObj.requesterDetails.name +", Your request is Rejected..")
      this.bookService.editBookStatus(requestObj.bookId).subscribe(data=>{
        console.log(data);
         location.reload();
      })
    })
   }

    
}

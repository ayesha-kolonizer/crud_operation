import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
 userList :User[] = [];
 first = 0 ;
 rows =10 ;
  constructor(private userService:UserService) { }

  ngOnInit(): void {
    // get user from userService
   this.userList = this.userService.getUsers();
  }
  // prime ng datatable pagination method

  // primeNg datatable user to remove
  remove(id:number){
    this.userService.removeUser(id);
    this.userList = this.userService.getUsers();
  }
  }


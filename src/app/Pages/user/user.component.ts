import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Shared/user';
import { UserService } from 'src/app/Shared/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = this.userService.data;
  userDetail: User;


  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUsers();
  }

}

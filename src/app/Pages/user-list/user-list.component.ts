import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Shared/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Shared/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  user : User;
  users: User[];
  id: number;
  
  constructor(private router: Router,
    private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((response: any) => {
      this.users = response.data
    })
  }

  onUserClicked(user: User){
    this.user = user;
    this.userService.user = this.user;
    this.id = user.id;
    this.userService.id = this.id;
    this.router.navigate(['/user/'+ this.id]);
  }
}

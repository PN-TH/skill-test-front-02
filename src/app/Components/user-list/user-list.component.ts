import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/Shared/user';
import { UserService } from 'src/app/Shared/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Input() users: User[]
  
  constructor() {}

  ngOnInit() {

  }
}

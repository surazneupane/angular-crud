import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  allUsers: User[] = [];

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    // retriving all users at init
    this.getUsers();
  }

  getUsers(): void {
    this.userService
      .getUsers()
      .subscribe((allUsers) => (this.allUsers = allUsers));
  }

  deleteUser(id: number) {
    this.userService.removeUser(id) .subscribe((allUsers) => (this.allUsers = allUsers)) ;
  }
}

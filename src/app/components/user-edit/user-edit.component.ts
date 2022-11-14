import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent implements OnInit {
  user?: User;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getUser();
  }

  profileForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
  });

  getUser(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.userService.getUser(id).subscribe((user) => (this.user = user));
    this.profileForm.controls['name'].setValue(this.user ? this.user.name : '');
    this.profileForm.controls['email'].setValue(
      this.user ? this.user.email : ''
    );
    this.profileForm.controls['address'].setValue(
      this.user ? this.user.address : ''
    );
  }

  updateUser() {
    const values = this.profileForm.value;
    this.userService.updateUser(values, this.user ? this.user.id : 0);
  }

  deleteUser(id : number) {
    this.userService.removeUser(id);
  }

  goBack() {
    this.location.back();
  }
}

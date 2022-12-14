import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService, User } from '@deepbits/users';
import {
  ConfirmationService,
  ConfirmEventType,
  MessageService,
} from 'primeng/api';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'admin-user-list',
  templateUrl: './user-list.component.html',
  styles: [],
})
export class UserListComponent implements OnInit, OnDestroy {
  users: User[] = [];
  endsubs$: Subject<any> = new Subject();
  constructor(
    private confirmationService: ConfirmationService,
    private usersService: UsersService,
    private messageService: MessageService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._getUsers();
  }
  ngOnDestroy(): void {
    
    this.endsubs$.complete();
  }
  deleteUser(userId: string) {
    this.confirmationService.confirm({
      message: 'Do you want to delete this user?',
      header: 'Delete User',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.usersService.deleteUser(userId).subscribe(
          (response) => {
            this._getUsers();
            this.messageService.add({
              severity: 'success',
              summary: 'Success',
              detail: 'User is Deleted!',
            });
          },

          (error) => {
            this.messageService.add({
              severity: 'error',
              summary: 'Error',
              detail: 'User could not be deleted',
            });
          }
        );
      },
    });
  }
  updateUser(userid: string) {
    this.router.navigateByUrl(`users/form/${userid}`);
  }

  private _getUsers() {
    this.usersService.getUsers().pipe(takeUntil(this.endsubs$)).subscribe(( users) => {
      this.users = users;
    });
  }
}


import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../shared/models/user.model';
import {UserService} from '../../shared/services/user.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  userId: number;
  userE: User;

  constructor(private userService: UserService, private router: Router, private routerAct: ActivatedRoute) { }

  ngOnInit() {
    this.userId = this.routerAct.snapshot.params['id'];
    this.userService.getUserById(this.userId).subscribe(
        (userToEdit) => this.userE = userToEdit.user,
    )
  }

  onSave() {
    this.router.navigate(['/admin']);
  }

  onCancel() {
      this.router.navigate(['/admin']);
  }

}

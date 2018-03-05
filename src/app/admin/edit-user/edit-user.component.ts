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
  @Input() userId;
  @Input() userE: User;

  constructor(private userService: UserService, private router: Router, private routerAct: ActivatedRoute) { }

  ngOnInit() {
    this.routerAct.queryParams['id'];
    console.log('test:' + this.userId);
  }
  onSave() {
    this.router.navigate(['/admin']);
  }

  onCancel() {
      this.router.navigate(['/admin']);
  }

}

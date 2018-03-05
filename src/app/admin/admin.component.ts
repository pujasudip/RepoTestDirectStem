import {Component, OnInit} from '@angular/core';
import {UserService} from '../shared/services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import 'rxjs/add/operator/map';
// import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    users: any;
    closeResult: string;

    constructor(private userService: UserService,
                private router: Router,
                private routerAct: ActivatedRoute) {
    }

    ngOnInit() {
        this.userService.getUsers().subscribe(
            (users) => {
                this.users = users;
            }
        );
    }

    onAdd() {
        this.router.navigate(['/add']);
    }

    onEdit(id) {
        this.router.navigate(['/edit/' + id]);
    }

    onDeleteUser(id: number) {
        this.userService.deleteUserById(id).subscribe(
            (users) => {
                this.users = users;
            },
        (error) => console.log(error),
            // () =>  console.log('complete'),
        );
    }

    // open(content, userId) {
    //     this.modalService.open(content).result.then((result) => {
    //         this.closeResult = `Closed with: ${result}`;
    //         this.onDeleteUser(userId);
    //         this.router.navigate(['/admin']);
    //     }, (reason) => {
    //         this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    //     });
    // }
    //
    // private getDismissReason(reason: any): string {
    //     if (reason === ModalDismissReasons.ESC) {
    //         return 'by pressing ESC';
    //     } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
    //         return 'by clicking on a backdrop';
    //     } else {
    //         return  `with: ${reason}`;
    //     }
    // }
}

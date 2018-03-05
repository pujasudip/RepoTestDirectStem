import {NgModule} from '@angular/core';
import {AddUserComponent} from './add-user/add-user.component';
import {HttpModule} from '@angular/http';
import {AdminComponent} from './admin.component';
import {CommonModule} from '@angular/common';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
    declarations: [
        AdminComponent,
        AddUserComponent,
        EditUserComponent,
    ],
    imports: [
        HttpModule,
        CommonModule
    ],
    exports: [
        AdminComponent,
        AddUserComponent
    ],
})
export class AdminModule {
}

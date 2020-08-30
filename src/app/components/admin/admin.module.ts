import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackOfficeComponent } from './back-office/back-office.component';
import { Routes, RouterModule } from '@angular/router';
import { UpdateColorsComponent } from './update-colors/update-colors.component';
import { UpdateTextComponent } from './update-text/update-text.component';

const routes: Routes = [
    {
        path: "back-office", component: BackOfficeComponent, children: [
            { path: "update-color", component: UpdateColorsComponent },
            { path: "update-text", component: UpdateTextComponent },
        ]
    }
];

@NgModule({
  declarations: [BackOfficeComponent, UpdateColorsComponent, UpdateTextComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes) // use the above routes
  ]
})
export class AdminModule { }

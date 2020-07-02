import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/service/countries.service';
import { usersDataBase } from '../../models/usersDataBase.model';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public service: CountriesService, private spinner: NgxSpinnerService) { }

  public allUsers: usersDataBase[];

    async ngOnInit() {
        this.spinner.show();
        setTimeout(async () => {
            try {
                this.allUsers = await this.service.getAllusers();
            }
            catch (err) {
                alert(err.message);
            }
            this.spinner.hide();
        }, 2000);
    }

    public async userDelete(id: number) {
        try {
            const confirmDeletion = confirm("Are you sure?");
            if(!confirmDeletion) {
                return ;
            }
            await this.service.userDelete(id);
            alert("user has been deleted");
            location.reload()
        }
        catch (err) {
            alert(err.message);
        }
    }
}

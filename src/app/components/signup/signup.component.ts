import { Component } from '@angular/core';
import { usersDataBase } from '../../models/usersDataBase.model';
import { CountriesService } from 'src/app/service/countries.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

    public user = new usersDataBase();

  constructor(private service: CountriesService) { }

  public async addUser() {
    try {
        const addedUser = await this.service.addUser(this.user);
        alert("user has been added. ID: " + addedUser.id);
    }
    catch (err) {
        alert(err.message);
    }
}

}

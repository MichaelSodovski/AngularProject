import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { usersDataBase } from 'src/app/models/usersDataBase.model';
import { CountriesService } from 'src/app/service/countries.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

    public user: usersDataBase;

  constructor(private myActivatedRoute: ActivatedRoute, private service: CountriesService, private myRouter: Router ) { }

  async ngOnInit() {
      try {
        const id =+this.myActivatedRoute.snapshot.params.userID;
        this.user = await this.service.getUser(id);
      }
      catch(err) {
          alert(err.message);
      }
  }

  public async userUpdate() {
      try{
          const updatedUser = await this.service.updateUser(this.user);
          alert("user: " + updatedUser.id + " has been updated");
          this.myRouter.navigate([`${"users"}`]);
      }
      catch(err) {
          alert(err.message);
      }
  }
}

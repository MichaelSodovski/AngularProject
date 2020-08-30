import { Injectable } from '@angular/core';
import { countriesModel } from '../models/countries.model';
import { usersDataBase } from '../models/usersDataBase.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  constructor(private myHttpClient: HttpClient) { }

  public getAllCountries(): Promise<countriesModel[]> {
    const observable = this.myHttpClient.get<countriesModel[]>("https://restcountries.eu/rest/v2/all");
    return observable.toPromise();
}

public getAllusers(): Promise<usersDataBase[]> {
    const observable = this.myHttpClient.get<usersDataBase[]>("http://localhost:3000/usersDataBase");
    return observable.toPromise();
}

public addUser(user: usersDataBase): Promise<usersDataBase> {
    const observable = this.myHttpClient.post<usersDataBase>("http://localhost:3000/usersDataBase", user);
    return observable.toPromise();
}

public userDelete(id: number): Promise<undefined> {
    const observable = this.myHttpClient.delete<undefined>("http://localhost:3000/usersDataBase/" + id);
    return observable.toPromise();
}

public getUser(id: number): Promise<undefined> {
    const observable = this.myHttpClient.get<undefined>("http://localhost:3000/usersDataBase/" + id);
    return observable.toPromise();
}

public updateUser(user: usersDataBase): Promise<usersDataBase> {
    const observable = this.myHttpClient.put<usersDataBase>("http://localhost:3000/usersDataBase/" + user.id, user);
    return observable.toPromise();
}



}

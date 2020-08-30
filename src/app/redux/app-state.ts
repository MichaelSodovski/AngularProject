import { users } from 'src/app/models/countries.model';

export class appState {

    public countries: countriesModel[];

    public constructor() {
        this.countries = [];

    }
}
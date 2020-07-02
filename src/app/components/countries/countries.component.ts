import { Component, OnInit } from '@angular/core';
import { countriesModel } from 'src/app/models/countries.model';
import { CountriesService } from 'src/app/service/countries.service';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
    selector: 'app-countries',
    templateUrl: './countries.component.html',
    styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

    public allCountries: countriesModel[];
    public countries: string;
    public country: countriesModel[];

    constructor(public CountriesService: CountriesService, private spinner: NgxSpinnerService) { }

    async ngOnInit() {
        this.spinner.show();
        setTimeout(async () => {
            this.countries = '';
            try {
                this.allCountries = await this.CountriesService.getAllCountries();
                this.country = [...this.allCountries];
            }
            catch (err) {
                alert(err.message);
            }
            this.spinner.hide();
        }, 2000);
    }

    // public search() {
    //     this.country = this.countries.filter(srch => {
    //         srch.name.toLowerCase().includes(this.countries) ||
    //             srch.capital.toLowerCase().includes(this.countries);
    //     }
    //     );
    // }

}

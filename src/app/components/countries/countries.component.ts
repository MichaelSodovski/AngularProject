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
    public country: countriesModel[];
    public original: countriesModel[];
    public textToSearch: string;
   
    constructor(public CountriesService: CountriesService, private spinner: NgxSpinnerService) { }

    async ngOnInit() {
        this.original = await this.CountriesService.getAllCountries();
        this.country = this.original;
        

        this.spinner.show();

        setTimeout(async () => {
            try {
                this.allCountries = await this.CountriesService.getAllCountries();
            }
            catch (err) {
                alert(err.message);
            }
            this.spinner.hide();
        }, 2000);
    }

    public onTextChange() {
        this.country = this.original.filter(
            c => c.name.toLowerCase().includes(this.textToSearch.toLowerCase()) ||
              c.capital.toLowerCase().includes(this.textToSearch.toLowerCase())
        )
    }

}

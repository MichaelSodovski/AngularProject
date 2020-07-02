import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    strPath: string;

    public generateRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    ngOnInit() {
        setInterval(() => {
            this.strPath = this.getRandomCapital();
        }, 10000)
    }

    public getRandomCapital(): string {
        let path: string;
        switch (this.generateRandomNumber(1, 9)) {
            case 1: path = "bangkok.jpg";
                break;
            case 2: path = "beijing.jpg";
                break;
            case 3: path = "egypt.jpg";
                break;
            case 4: path = "Jakarta.jpg";
                break;
            case 5: path = "jerusalem.jpg";
                break;
            case 6: path = "mexicoCity.jpg";
                break;
            case 7: path = "nursultan.jpg";
                break;
            case 8: path = "rome.jpg";
                break;
            case 9: path = "sidney.jpg";
                break;
        }
        return path;
    }
}



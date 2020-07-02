import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }

  public currentImgIndex = null;
    public images = [
        "../../../assets/images/capitals/bangkok.jpg",
        "../../../assets/images/capitals/beijing.jpg",
        "../../../assets/images/capitals/egypt.jpg",
        "../../../assets/images/capitals/Jakarta.jpg",
        "../../../assets/images/capitals/jerusalem.jpg",
        "../../../assets/images/capitals/mexicoCity.jpg",
        "../../../assets/images/capitals/nursultan.jpg",
        "../../../assets/images/capitals/rome.jpg",
        "../../../assets/images/capitals/sidney.jpg",
    ];
  public generateRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  ngOnInit(): void {
    this.currentImgIndex = this.generateRandomNumber(1, this.images.length);
    setInterval(() => this.currentImgIndex = this.generateRandomNumber(1, this.images.length), 10000);
  }

}

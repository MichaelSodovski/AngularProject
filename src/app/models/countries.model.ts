export class countriesModel {

    static data: countriesModel[];

    constructor (
        public name?: string, 
        public nativeName?: string, 
        public capital?: string, 
        public population?: number,
        public flag?: string,
        public data?: countriesModel[]
        ) {}
}
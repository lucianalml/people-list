export class People {
    constructor(public id?: number,
        public name?: string,
        public disclosableInfo?: string
    ) {}

    static fromJSON(json: any): People {
        let people = Object.create(People.prototype);
        Object.assign(people, json);
        return people;
    }

}
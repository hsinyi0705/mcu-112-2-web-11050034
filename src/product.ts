/*
class classA {
    constructor() {}
    
    propA: string;
}
*/

export class Product {
  constructor(
    public id: number,
    public name: string,
    public company: string,
    public price: number,
    public isShow: boolean,
    public creatDate: Date,
    public modifyDate?: Date
  ) {}
}

/*
class classA {
    constructor() {}
    
    propA: string;
}
*/

export class Product {
  constructor(
    id: number,
    name: string,
    company: string,
    price: number,
    isShow: boolean,
    creatDate: Date,
    modifyDate: undefined | Date
  ) {
    this.id = id;
    this.name = name;
    this.company = company;
    this.price = price;
    this.isShow = isShow;
    this.creatDate = creatDate;
    this.modifyDate = modifyDate;
  }

  id: number;

  name: string;

  company: string;

  price: number;

  isShow: boolean;

  creatDate: Date;

  modifyDate?: Date;
}

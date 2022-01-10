export class Quotes {
    showInfo: boolean;
    constructor(public id:number,public datePosted: Date,public name:string,public author:string,public quote:string,public likes:number, public dislikes:number){
        this.showInfo=false;
      }
  }
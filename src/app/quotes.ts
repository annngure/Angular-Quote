export class Quotes {
    showDetails: boolean;
    constructor(
        public id: number,
        public datePosted: Date,
        public postAuthor: string, 
        public quoteAuthor: string,
        public quoteDescription: string, 
        public likes:number, 
        public dislikes:number
    ){
      this.showDetails=false;
    }
}
import { Component, OnInit } from '@angular/core';
import { Quotes} from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quotes[]=[
  new Quotes(0,new Date (2021,12,17),"Carol","Captain J Sparrow","The problem is not the problem.The problemis your attitude about the problem.",50,10),
  new Quotes(1, new Date (2021,12,19),"Mark","Brian Tracy","To see what is right and not do it is a lack of courage.",70,30),
  new Quotes(2,new Date (2021,12,19),"Joses","Albert Einstien","The only reason for time is so that everything does not happen at once.",20,40),
  ];
  
  getQuotes(){
    return this.quotes;
  }

  upvote(index:any) {
    this.quotes[index].likes ++;
  }
  downvote(index:any) {
    this.quotes[index].dislikes  ++;
  }

  initialLikes!: number;
  pressedLikes!: number;
  finalQuoteLikes!: number;
  index!: number;

  rankQuotes(){
    this.initialLikes = 0
    this.pressedLikes = 0

    for(this.index=0 ; this.index < this.quotes.length; this.index++) {
      this.pressedLikes = this.quotes[this.index].likes;
      if(this.pressedLikes > this.initialLikes){
        this.initialLikes = this.pressedLikes;
        this.finalQuoteLikes = this.initialLikes;
      }
    }
    return this.finalQuoteLikes
  }

  toggleDetails(index: any){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  deleteQuote(quote:any){
    if(this.getQuotes().indexOf(quote)>= 0){
        let toDelete = confirm(`Are you sure you want to delete the quote '${this.quotes[this.quotes.indexOf(quote)].quoteDescription}' by ${this.quotes[this.quotes.indexOf(quote)].quoteAuthor}?`)
        if(toDelete){
            this.getQuotes().splice(this.getQuotes().indexOf(quote),1);
        }
    }
    this.rankQuotes();
  }

  addNewQuote(quotes: any){
    let quoteLength = this.quotes.length;
    quotes.id = quoteLength + 1;
    quotes.datePosted = new Date(quotes.datePosted);
    this.quotes.push(quotes);
    let confirmation = confirm(`Quote Added Successfully!`);
    return confirmation;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
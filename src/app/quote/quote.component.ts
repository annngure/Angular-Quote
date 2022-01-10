import { Component, OnInit } from '@angular/core';
import { Quotes} from '../quotes';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quotes[]=[
  new Quotes(1,new Date (2021,12,17),"Carol","Captain J Sparrow","The problem is not the problem.The problemis your attitude about the problem.",50,10),
  new Quotes(2, new Date (2021,12,19),"Mark","Brian Tracy","To see what is right and not do it is a lack of courage.",70,30),
  new Quotes(3,new Date (2021,12,19),"Joses","Albert Einstien","The only reason for time is so that everything does not happen at once.",20,40),
  ];
  
  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }  
  addedQuote(quote: Quotes){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    this.quotes.push(quote)
  }
  quoteDelete(isRead: any, index: number){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
 
  constructor() { }

  ngOnInit() {
  }

}
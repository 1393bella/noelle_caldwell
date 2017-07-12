import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Add a Quote';
  quote: Quote = new Quote();
  quotes: Quote[] = [];
  index: number = 0;

  addQuote() {
    this.quote.id = this.index;
    this.quotes.push(this.quote);
    this.quote = new Quote();
    this.index++;
    this.sortQuotes();
  }

  sortQuotes() {
    this.quotes = this.quotes.sort((a, b) => {
      return b.votes - a.votes;
    })
  }

  upVote(id) {
    for (let q of this.quotes) {
      if (q.id == id) {
        q.votes++;
        break;
      }
    }
    this.sortQuotes();
  }

  downVote(id) {
    for (let q of this.quotes) {
      if (q.id == id) {
        q.votes--;
        break;
      }
    }
    this.sortQuotes();
  }

  deleteQuote(id) {
    for (let q in this.quotes) {
      if (this.quotes[q].id == id) {
        let tmp = this.quotes[this.quotes.length-1];
        this.quotes[this.quotes.length-1] = this.quotes[q];
        this.quotes[q] = tmp;
        this.quotes.pop();
        break;
      }
    }
  }
}

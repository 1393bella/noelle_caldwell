import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css']
})
export class QuotesListComponent implements OnInit {
  title = 'Quotes List';
  @Input() allQuotes;
  @Output() up = new EventEmitter();
  @Output() down = new EventEmitter();
  @Output() delete = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  voteUp(quoteId) {
    this.up.emit(quoteId);
  }

  voteDown(quoteId) {
    this.down.emit(quoteId);
  }

  deleteQuote(quoteId) {
    this.delete.emit(quoteId);
  }

}

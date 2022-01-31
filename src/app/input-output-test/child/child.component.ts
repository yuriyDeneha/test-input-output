import { Component, Input, OnInit, EventEmitter, Output, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input() translation: any;
  @Input() counter: number;
  @Input() dateNow: Date;

  @Output() onIncreaseCounter = new EventEmitter();
  @Output() onIncreaseDate = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    console.log('--ngOnInit--', this.dateNow);
  }

  ngOnChanges(): void {
    console.log('--ngOnChanges--', this.dateNow);
  }

  increaseCounter() {
    this.onIncreaseCounter.emit();
  }

  increaseDate() {
    this.onIncreaseDate.emit();
  }
}

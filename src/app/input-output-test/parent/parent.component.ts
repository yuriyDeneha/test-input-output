import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DataManagementService } from '../services/data-management.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {


  translationObject: any;
  counter: number = 0;

  dateNow = new Date();

  constructor(
    private changeDetectionRef: ChangeDetectorRef,
    private dataManagementService: DataManagementService,

  ) {
    this.translationObject = this.dataManagementService.translationObject;
  }

  ngOnInit(): void {
  }

  increaseCounter() {
    if (this.counter >= 5){
      return;
    }
    this.counter ++;
  }

  increaseDatePlusOne() {
    const newDate = new Date(this.dateNow).getDate() + 1;
    console.log(newDate);
    this.dateNow.setDate(newDate);

    this.dateNow = new Date(this.dateNow);

    this.changeDetectionRef.detectChanges();
    console.log(this.dateNow);
  }
}

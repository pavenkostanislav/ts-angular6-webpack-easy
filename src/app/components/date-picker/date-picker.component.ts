import { Component, EventEmitter, Input, Output, ViewEncapsulation, OnChanges, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { AppService } from '../../views/app-component/app.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  moduleId: module.id,
  encapsulation: ViewEncapsulation.None,
  selector: 'date-picker',
  templateUrl: 'date-picker.component.html'
})
export class DatePickerComponent implements OnChanges, OnInit {
  @Input() title = 'caption';
  focused: boolean = true;
  errorMessage: string;
  dateValue: NgbDateStruct;

  constructor(appSrv: AppService) {
    this.errorMessage = appSrv.getMsgErrors('notValidValue');
  }

  ngOnInit(): void {
    this.dateValue = this.convertToDatePickerFormat(this.dateControl.value);
  }

  ngOnChanges(): void {
    this.dateValue = this.convertToDatePickerFormat(this.dateControl.value);
  }

  @Input() dateControl: AbstractControl;
  @Output() onChanged = new EventEmitter<AbstractControl>();
  onNgModelChange(value: NgbDateStruct) {
    this.dateControl.setValue(this.convertToString(value));
    this.onChanged.emit(this.dateControl);
  }
  convertToString(val: NgbDateStruct): string {
    const day = (val.day.toString().length < 2) ? `0${val.day}` : val.day.toString();
    const month = (val.month.toString().length < 2) ? `0${val.month}` : val.month.toString();

    return `${day}.${month}.${val.year}`;
  }


  convertToDatePickerFormat(val: string): NgbDateStruct {
    const res: NgbDateStruct = {
      day: +val.substr(0, 2),
      month: +val.substr(3, 2),
      year: +val.substr(6, 4)
    }
    return res
  }

  onFocus() {
    this.focused = true;
  }

  onBlur() {
    this.focused = false;
  }
}

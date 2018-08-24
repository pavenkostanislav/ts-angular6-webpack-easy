import { Component, EventEmitter, Input, Output, ViewEncapsulation, OnChanges, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { AppService } from '../../views/app-component/app.service';

interface DatePickerResult {
  year: number,
  month: number,
  day: number
}

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
  dateValue: DatePickerResult;

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
  onNgModelChange(value: DatePickerResult) {
    this.dateControl.setValue(this.convertToString(value));
    this.onChanged.emit(this.dateControl);
  }
  convertToString(val: DatePickerResult): string {
    const day = (val.day.toString().length < 2) ? `0${val.day}` : val.day.toString();
    const month = (val.month.toString().length < 2) ? `0${val.month}` : val.month.toString();

    return `${day}.${month}.${val.year}`;
  }


  convertToDatePickerFormat(val: string): DatePickerResult {
    const res: DatePickerResult = {
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

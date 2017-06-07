// // app.component.ts
 import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
//  import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
 

 import '@progress/kendo-ui';

 declare var kendo: any;

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html'
})
export class AppComponent implements AfterViewInit {

   @ViewChild('scheduler') schedulerEl: ElementRef;
   @ViewChild('datePicker') datePickerEl: ElementRef;
   @ViewChild('spreadsheet') spreadSheetEl: ElementRef;


   title: any = 'app works!';

   ngAfterViewInit() {
      //  kendo.jQuery(this.datePickerEl.nativeElement).css('color', 'red');

      //  // Using a template reference variable
      //  kendo.jQuery("#datePickerEl").kendoDatePicker({
      //      change: (e) => {
      //          this.title = e.sender.value();
      //      }
      //  });

      //  // Using a @ViewChild decorator
      //  kendo.jQuery(this.schedulerEl.nativeElement).kendoScheduler({
      //      // scheduler initialization options
      //  });

       kendo.jQuery(this.spreadSheetEl.nativeElement).kendoSpreadsheet({
           // scheduler initialization options
           
       });
   }
}



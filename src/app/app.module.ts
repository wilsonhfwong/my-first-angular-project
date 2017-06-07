import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { GridModule } from '@progress/kendo-angular-grid';

import { AppComponent } from './app.component';

import '@progress/kendo-ui';

@NgModule({
   declarations: [
       AppComponent
   ],
   imports: [
       BrowserModule,
       FormsModule,
       HttpModule,
       GridModule
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }
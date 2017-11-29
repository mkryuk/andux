import { NgReduxModule } from '@angular-redux/store';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './components/counter/counter.component';

@NgModule({
  imports: [
    CommonModule,
    NgReduxModule
  ],
  declarations: [CounterComponent],
  exports: [CounterComponent]
})
export class CounterModule { }

import { ChangeDetectionStrategy, Component, signal, WritableSignal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  tips: number[] = [5, 10, 15, 25, 50];
  tipAmount: WritableSignal<number> = signal(0);
  total: WritableSignal<number> = signal(0);
  isResetDisabled: WritableSignal<boolean> = signal(true);
  bill: string = '';
  tipPercent: number = 0;
  persons: string = '';
  noPersons: boolean = false;
  protected readonly Number = Number;

  calculate(tip: number): void {
    let personNumber: number = Number(this.persons);
    this.tipPercent = tip;
    this.checkToReset();
    if (!this.persons) {
      this.noPersons = true;
      return;
    }
    this.noPersons = false;
    let billToNumber: number = Number(this.bill);
    this.total.set(
      Number(
        ((billToNumber + (billToNumber * this.tipPercent / 100)) / personNumber
        ).toFixed(2))
    );
    this.tipAmount.set(
      Number(
        ((billToNumber * this.tipPercent / 100) / personNumber
        ).toFixed(2))
    );
  }

  reset(): void {
    this.tipAmount.set(0);
    this.total.set(0);
    this.bill = '';
    this.tipPercent = 0;
    this.persons = '';
    this.noPersons = false;
    this.isResetDisabled.set(true);
  }

  checkToReset(): void {
    if (!this.bill && !this.tipPercent && !this.persons)
      this.isResetDisabled.set(true);
    else
      this.isResetDisabled.set(false);
  }
}

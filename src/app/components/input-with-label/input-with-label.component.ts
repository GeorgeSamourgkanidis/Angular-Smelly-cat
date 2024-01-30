import { CommonModule, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'input-with-label',
  standalone: true,
  imports: [NgIf, CommonModule, ReactiveFormsModule],
  templateUrl: './input-with-label.component.html',
  styleUrl: './input-with-label.component.scss'
})
export class InputWithLabelComponent {
  @Input()
  isTextArea: boolean = false;
  @Input()
  title: string;
  @Input()
  isVerticalTitle: boolean = false;
  @Input()
  placeholder: string;
  @Input()
  inputType: string;
  @Input()
  control: FormControl;
}

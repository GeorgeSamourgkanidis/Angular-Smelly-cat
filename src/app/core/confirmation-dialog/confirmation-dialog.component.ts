import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'confirmation-dialog',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './confirmation-dialog.component.html',
  styleUrl: './confirmation-dialog.component.scss'
})
export class ConfirmationDialogComponent implements OnInit {
  @Input()
  title: string;
  @Input()
  submitText: string;

  @Output()
  cancelOrConfirm = new EventEmitter<boolean>();

  showLoading: boolean;

  ngOnInit(): void {
    this.showLoading = false;
  }

  cancel() {
    this.cancelOrConfirm.emit(false);
  }

  confirm() {
    this.showLoading = true;
    this.cancelOrConfirm.emit(true);
  }
}

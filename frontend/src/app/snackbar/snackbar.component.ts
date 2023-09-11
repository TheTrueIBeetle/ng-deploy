// snackbar.service.ts
import {Injectable, Input} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarComponent {
  constructor(private snackBar: MatSnackBar) {}

  open(message: string, action: string = 'Close', duration: number = 3000) {
    this.snackBar.open(message, action, {
      duration: duration,
    });
  }
}

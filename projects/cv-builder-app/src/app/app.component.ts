import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModernComponent } from '@templates/modern';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , ModernComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cv-builder-app';
}

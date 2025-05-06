import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ThemeModeComponent } from '../theme-mode/theme-mode.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, ThemeModeComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {}


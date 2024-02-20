import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faFeather } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-section',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './header-section.component.html',
  styleUrl: './header-section.component.css'
})
export class HeaderSectionComponent {
  faFeather = faFeather;
}

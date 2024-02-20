import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faComment, faEllipsis, faEye, faList, faPaperclip, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mainsection',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './mainsection.component.html',
  styleUrl: './mainsection.component.css'
})
export class MainsectionComponent {
  faEye = faEye;
  faComment = faComment;
  faPaperClip = faPaperclip;
  faPlus = faPlus;
  faList = faList;
  faEllipsis = faEllipsis;
}

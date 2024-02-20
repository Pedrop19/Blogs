import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './domains/blogs/components/header/header.component';
import { HeaderSectionComponent } from './domains/blogs/components/header-section/header-section.component';
import { initFlowbite } from 'flowbite';
import { MainsectionComponent } from './domains/blogs/components/mainsection/mainsection.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, HeaderSectionComponent, MainsectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Blogs';

  ngOnInit() {
    initFlowbite();
  }
}

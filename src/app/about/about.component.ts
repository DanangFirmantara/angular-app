import { Component, HostListener, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  @HostListener('document:keypress', ['$event'])
  keypress(e: KeyboardEvent) {
      console.log("Key Up! " + e.key);
  }
}

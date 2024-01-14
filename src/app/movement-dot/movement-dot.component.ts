import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-movement-dot',
  standalone: true,
  imports: [],
  templateUrl: './movement-dot.component.html',
  styleUrl: './movement-dot.component.css'
})
export class MovementDotComponent {
  @HostListener('document:keypress', ['$event'])
  keypress(e: KeyboardEvent) {
      console.log("Key Up! " + e.key);
  }
}

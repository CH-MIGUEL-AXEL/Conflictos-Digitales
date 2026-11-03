import { Component, signal } from '@angular/core';
import { SITE_CONTENT } from './content';

@Component({ selector: 'app-root', standalone: true, templateUrl: './app.component.html' })
export class AppComponent {
  readonly content = SITE_CONTENT;
  readonly menuOpen = signal(false);
  readonly selectedWorkshop = signal<number | null>(null);
  closeMenu(): void { this.menuOpen.set(false); }
  toggleWorkshop(index: number): void { this.selectedWorkshop.update(current => current === index ? null : index); }
}

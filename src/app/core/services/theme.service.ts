import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly storageKey = 'dark-theme';
  private darkMode = new BehaviorSubject<boolean>(this.loadTheme());

  isDarkMode$ = this.darkMode.asObservable();

  constructor() {
    this.applyTheme(this.darkMode.value);
  }

  toggle() {
    const next = !this.darkMode.value;
    this.darkMode.next(next);
    this.applyTheme(next);
    localStorage.setItem(this.storageKey, JSON.stringify(next));
  }

  private loadTheme(): boolean {
    const stored = localStorage.getItem(this.storageKey);
    if (stored !== null) {
      return JSON.parse(stored);
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  private applyTheme(dark: boolean) {
    document.body.classList.toggle('dark-theme', dark);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface ThemePalette {
  key: string;
  label: string;
  primary: string;
  secondary: string;
}

export const THEME_PALETTES: ThemePalette[] = [
  { key: 'azure', label: 'Azure', primary: '#1565c0', secondary: '#00bcd4' },
  { key: 'violet', label: 'Violet', primary: '#7c4dff', secondary: '#ff4081' },
  { key: 'rose', label: 'Rose', primary: '#e91e63', secondary: '#ff9800' },
  { key: 'green', label: 'Green', primary: '#2e7d32', secondary: '#8bc34a' },
  { key: 'orange', label: 'Orange', primary: '#e65100', secondary: '#ffc107' },
];

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly darkKey = 'dark-theme';
  private readonly paletteKey = 'theme-palette';

  private darkMode = new BehaviorSubject<boolean>(this.loadDark());
  private palette = new BehaviorSubject<string>(this.loadPalette());

  isDarkMode$ = this.darkMode.asObservable();
  palette$ = this.palette.asObservable();
  palettes = THEME_PALETTES;

  constructor() {
    this.applyDark(this.darkMode.value);
    this.applyPalette(this.palette.value);
  }

  toggleDark() {
    const next = !this.darkMode.value;
    this.darkMode.next(next);
    this.applyDark(next);
    localStorage.setItem(this.darkKey, JSON.stringify(next));
  }

  setPalette(key: string) {
    this.palette.next(key);
    this.applyPalette(key);
    localStorage.setItem(this.paletteKey, key);
  }

  private loadDark(): boolean {
    const stored = localStorage.getItem(this.darkKey);
    if (stored !== null) {
      return JSON.parse(stored);
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  private loadPalette(): string {
    return localStorage.getItem(this.paletteKey) || 'azure';
  }

  private applyDark(dark: boolean) {
    document.body.classList.toggle('dark-theme', dark);
  }

  private applyPalette(key: string) {
    THEME_PALETTES.forEach(p => document.body.classList.remove('theme-' + p.key));
    document.body.classList.add('theme-' + key);
  }
}

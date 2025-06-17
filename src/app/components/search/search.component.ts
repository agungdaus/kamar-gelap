import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="searchForm" (ngSubmit)="onSubmit()">
      <input type="text" formControlName="query" placeholder="Search..." />
      <button type="submit">Search</button>
    </form>
  `,
})
export class SearchComponent {
  searchForm = new FormGroup({
    query: new FormControl<string>('', { nonNullable: true })
  });

  onSubmit() {
    console.log('Search:', this.searchForm.value.query);
  }
}

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  @Input() categories: string[] = ['Coffee', 'Drinks', 'Snacks'];
  @Output() selectedItem = new EventEmitter<string>();

  public toggle: boolean[] = [];

  constructor() { }

  ngOnInit(): void {
    if (this.categories.length > 0) {
      this.categories.forEach(val => val == 'Coffee' ? this.toggle.push(true) : this.toggle.push(false));
    }
  }

  onClickedToggle(i: number) {
    if (!this.toggle[i]) this.toggle[i] = !this.toggle[i];
    this.categories.forEach((val, index) => {
      if (index != i) this.toggle[index] = false;
    });

    if (this.toggle[i]) {
      this.selectedItem.emit(this.categories[i]);
    }
  }
}

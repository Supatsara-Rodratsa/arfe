import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { UtilitiesService } from '../../utility.service';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  @Input() categories: string[] = ['Coffee', 'Drinks', 'Snacks'];
  @Output() selectedItem = new EventEmitter<string>();

  public toggle: boolean[] = [];

  constructor(
    private utilitiesService: UtilitiesService
  ) { }

  ngOnInit(): void {
    if (this.categories.length > 0) {
      const selectedCategory = this.utilitiesService.getSelectedCategory() || null;

      if (selectedCategory) {
        this.categories.forEach(val => val == selectedCategory ? this.toggle.push(true) : this.toggle.push(false));
      } else {
        this.categories.forEach(val => val == 'Coffee' ? this.toggle.push(true) : this.toggle.push(false));
      }
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

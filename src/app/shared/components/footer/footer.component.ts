import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Output() selectedItem = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickedItem(item: string) {
    this.selectedItem.emit(item);
  }

}

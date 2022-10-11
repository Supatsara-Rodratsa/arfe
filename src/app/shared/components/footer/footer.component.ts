import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input() currentItem = ''; 
  @Output() selectedItem = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onClickedItem(item: string) {
    this.currentItem = item;
    this.selectedItem.emit(item);
  }

}

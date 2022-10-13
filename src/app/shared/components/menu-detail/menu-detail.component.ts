import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Menu } from 'src/app/landing-screen/components/all-menu-screen/all-menu.interface';
import { Location } from '@angular/common';
import { trigger, style, animate, transition, state } from '@angular/animations';

type PaneType = 'left' | 'right';
@Component({
  selector: 'app-menu-detail',
  templateUrl: './menu-detail.component.html',
  styleUrls: ['./menu-detail.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuDetailComponent implements OnInit {

  @Input() menu: Menu | undefined;
  @Input() currentIndex: number = 0;
  @Input() allLength: number = 0;
  @Output() updateIndex = new EventEmitter<number>();
  @Input() activePane: PaneType = 'left';

  constructor(private location: Location) {}

  ngOnInit(): void {
  }

  navigateBack() {
    this.location.back()
  }

  onClickedNext() {
    if (this.currentIndex == this.allLength - 1) {
      this.currentIndex = 0;
    } else {
      this.currentIndex++;
    }
    this.updateIndex.emit(this.currentIndex);
   
  }

  onClickedPrevious() {
    if (this.currentIndex == 0) {
      this.currentIndex = this.allLength - 1;
    } else {
      this.currentIndex--;
    }
    this.updateIndex.emit(this.currentIndex);    
  }

}

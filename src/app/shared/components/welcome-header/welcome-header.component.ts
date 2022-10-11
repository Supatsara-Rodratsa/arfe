import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-welcome-header',
  templateUrl: './welcome-header.component.html',
  styleUrls: ['./welcome-header.component.css']
})
export class WelcomeHeaderComponent implements OnInit {

  @Input() isGallery = false;
  @Input() isMenu = false;
  @Input() isShoppingCart = false;
  @Input() isPlaceOrder = false;
  @Input() isCard = false;
  @Input() isRanking = false;
  @Input() isArfeProfile= false;

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from 'src/app/shared/utility.service';

@Component({
  selector: 'app-order-screen',
  templateUrl: './order-screen.component.html',
  styleUrls: ['./order-screen.component.css']
})
export class OrderScreenComponent implements OnInit {

  constructor(
    public utilitiesService: UtilitiesService,
  ) { }

  ngOnInit(): void {
  }

  clearOrder() {
    this.utilitiesService.clearItems();
    this.utilitiesService.selectedIcon('gallery');
  }
}

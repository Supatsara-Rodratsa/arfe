import { Component, OnInit, Input } from '@angular/core';
import { UtilitiesService } from '../../utility.service';

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
  @Input() isArtWork = false;
  @Input() isVoting= false;
  public name: string = '';

  constructor(
    private utilitiesService: UtilitiesService

  ) { }

  ngOnInit(): void {
    this.name = this.utilitiesService.getName();
  }

}

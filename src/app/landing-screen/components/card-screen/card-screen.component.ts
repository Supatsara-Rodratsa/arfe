import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from 'src/app/shared/utility.service';

@Component({
  selector: 'app-card-screen',
  templateUrl: './card-screen.component.html',
  styleUrls: ['./card-screen.component.css']
})
export class CardScreenComponent implements OnInit {

  constructor(
    public utilitiesService: UtilitiesService,
  ) { }

  ngOnInit(): void {
  }
}

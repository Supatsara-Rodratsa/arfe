import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from 'src/app/shared/utility.service';

@Component({
  selector: 'app-voting-screen',
  templateUrl: './voting-screen.component.html',
  styleUrls: ['./voting-screen.component.css']
})
export class VotingScreenComponent implements OnInit {

  public photo: string = '';
  constructor(
    public utilitiesService: UtilitiesService
  ) { }

  ngOnInit(): void {
    this.photo = this.utilitiesService.getVotingImage();
  }

}

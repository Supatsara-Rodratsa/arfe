import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from 'src/app/shared/utility.service';
import { profileGallery } from './profile.interface';

@Component({
  selector: 'app-profile-screen',
  templateUrl: './profile-screen.component.html',
  styleUrls: ['./profile-screen.component.css']
})
export class ProfileScreenComponent implements OnInit {

  public gallery: any = profileGallery;

  constructor(
    public utilitiesService: UtilitiesService,
  ) { }

  ngOnInit(): void {
    let getNewImage: FileReader[] = this.utilitiesService.getImage() || [];
    if (getNewImage.length > 0) {
      getNewImage = getNewImage.reverse();
      this.gallery = getNewImage.concat(this.gallery);
    }
  }

  goToUploadArtWork() {
    this.utilitiesService.selectedIcon("artwork");
  }
}

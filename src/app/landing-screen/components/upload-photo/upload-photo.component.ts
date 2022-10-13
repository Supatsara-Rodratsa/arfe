import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilitiesService } from 'src/app/shared/utility.service';

@Component({
  selector: 'app-upload-photo',
  templateUrl: './upload-photo.component.html',
  styleUrls: ['./upload-photo.component.css']
})
export class UploadPhotoComponent implements OnInit {

  public uploadedImage: any;
  private imagePath: any;
  public url: any = null;
  private allImages: FileReader[] = [];

  constructor(
    public utilitiesService: UtilitiesService,
  ) { }

  ngOnInit(): void {
    this.allImages = this.utilitiesService.getImage();
    this.url = this.allImages[this.allImages.length-1];
  }

  cancel() {
    this.allImages.pop();
    this.utilitiesService.updateImage(this.allImages);
    this.utilitiesService.selectedIcon('gallery');
  }

  upload() {
    this.utilitiesService.selectedIcon('gallery');
  }

}

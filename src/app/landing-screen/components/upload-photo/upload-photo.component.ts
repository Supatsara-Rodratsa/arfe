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

  constructor(
    public utilitiesService: UtilitiesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.url = this.utilitiesService.getImage();
  }

}

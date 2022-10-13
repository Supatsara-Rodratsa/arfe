import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from 'src/app/shared/utility.service';

@Component({
  selector: 'app-upload-artwork',
  templateUrl: './upload-artwork.component.html',
  styleUrls: ['./upload-artwork.component.css']
})
export class UploadArtworkComponent implements OnInit {

  public message: string = '';
  public url: any = null;
  private imagePath: any;
  public showPhoto: boolean = false;

  constructor(
    public utilitiesService: UtilitiesService,
  ) { }


  ngOnInit(): void {
  }

  uploadPhoto(event: any) {
    const files = event.target.files;
    if (files.length === 0)
        return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
        this.message = "Only images are supported.";
        console.log(this.message);
        return;
    }

    const reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
        this.url = reader.result; 
        if (this.url) {
          this.showPhoto = true;
        }
    }
  }

  getNewImage() {
    return this.url;
  }
  
  cancel() {
    this.showPhoto = false;
  }

  upload() {
    this.utilitiesService.setImage(this.url as FileReader);
    this.utilitiesService.selectedIcon('gallery');
  }

}

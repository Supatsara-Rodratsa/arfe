import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from 'src/app/shared/utility.service';

@Component({
  selector: 'app-gallery-screen',
  templateUrl: './gallery-screen.component.html',
  styleUrls: ['./gallery-screen.component.css']
})
export class GalleryScreenComponent implements OnInit {

  public message: string = '';
  public url: any = null;
  private imagePath: any;

  constructor(
    public utilitiesService: UtilitiesService,
  ) { }

  ngOnInit(): void {
  }

  onFileSelected(event: any) {
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
          this.utilitiesService.setImage(this.url as FileReader)
          this.utilitiesService.selectedIcon('upload');
        }
    }
  }
}

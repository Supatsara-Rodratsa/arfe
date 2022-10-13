import { Component, OnInit } from '@angular/core';
import { UtilitiesService } from 'src/app/shared/utility.service';
import { AllArtWorks } from './gallery.interface';

@Component({
  selector: 'app-gallery-screen',
  templateUrl: './gallery-screen.component.html',
  styleUrls: ['./gallery-screen.component.css']
})
export class GalleryScreenComponent implements OnInit {

  public message: string = '';
  public url: any = null;
  private imagePath: any;
  public allArtWorks: any[] = AllArtWorks;

  constructor(
    public utilitiesService: UtilitiesService,
  ) { }

  ngOnInit(): void {
    const getNewImage: FileReader[] = this.utilitiesService.getImage() || [];
    if (getNewImage.length > 0) {
      this.allArtWorks = this.shuffle(getNewImage.concat(this.allArtWorks));
    } else {
      this.allArtWorks = this.shuffle(this.allArtWorks);
    }
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

  shuffle(array: any[]): any[] {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  };

  voting(image: string) {
    this.utilitiesService.setVotingImage(image);
    this.utilitiesService.selectedIcon('voting');
  }
}

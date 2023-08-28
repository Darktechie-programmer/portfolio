import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Amit Portfolio';

  showButton: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.scrollFunction();
  }

  public scrollFunction(): void {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
  }
  public onScrollUp(): void {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  public downloadResume(): void {
    const a = document.createElement('a');
    a.href = "../assets/myResumeBlack.pdf";
    a.target = "_blank";
    a.click();
  }

  public openLinkedIn():void {
    const a = document.createElement('a');
    a.href = "https://www.linkedin.com/in/amit-kumar-techie/";
    a.target = "_blank";
    a.click();
  }

  public openGitHub(): void {
    const a = document.createElement('a');
    a.href = "https://github.com/Darktechie-programmer";
    a.target = "_blank";
    a.click();
  }
}



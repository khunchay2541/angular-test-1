import { ChangeDetectorRef, Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-test';
  
  mobileQueryMax: MediaQueryList;
  //private _mobileQueryListener: () => void;
  private _mobileQueryListener

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher){
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        
    this.mobileQueryMax = media.matchMedia('(max-width: 600px)')
   
    this.mobileQueryMax.addListener(this._mobileQueryListener);

  }

  ngOnDestroy(): void {
    this.mobileQueryMax.removeListener(this._mobileQueryListener)
  }
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  @Output('toggle') navToggle = new EventEmitter();
  @Input('media_query') mediaQueryMax : boolean
  constructor() { }

  ngOnInit(): void {
  }

  onClickNavToggle(){
    this.navToggle.emit();
  }

}

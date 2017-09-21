import { Component, OnInit } from '@angular/core';
import { NeoWikiConstants } from '../app.constants';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    baseUrl = NeoWikiConstants.BASE_TEMPLATE_PATH;
    
    constructor() { }

    ngOnInit() {
    }

}

import { Component, OnInit } from '@angular/core';
import { ComartService } from '../services/comart.service';
import { ComArt } from '../models/comart.model';

@Component({
  selector: 'app-comart',
  templateUrl: './comart.component.html',
  styleUrls: ['./comart.component.scss']
})
export class ComartComponent implements OnInit {

    comArtList: ComArt[] = [];
    constructor(private _comartService : ComartService) { }

    ngOnInit() {
        this.getComArtList();
    }

    getComArtList() {
        this.comArtList = this._comartService.getComArtList();
    }

}

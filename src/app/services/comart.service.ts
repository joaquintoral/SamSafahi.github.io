import { Injectable } from '@angular/core';
import { ComArt } from '../models/comart.model';
import { NeoWikiConstants } from '../app.constants';

// This should be taken from backend.
const ComArtList: ComArt[] = [
    { id: 0, name: "NEO on the moon", description: "", author: "Rufio-1408", src: "./assets/images/NEOSPACEMAN4K.jpg"},
    { id: 1, name: "No one can tell you what NEO is, you have to see for yourself", description: "", author: "justin7942163", src: "./assets/images/NEOMA.png"},
    { id: 2, name: "NEO in Vegas", description: "", author: "superantsman", src: "./assets/images/Neowelldone.png"},
    { id: 3, name: "Let NEO Guide us to a Bright Future", description: "", author: "Muixix", src: "./assets/images/Letneoguideus.png"}
];

@Injectable()
export class ComartService {
    constructor() { }
    
    getComArtList(): ComArt[] {
        return ComArtList;
    }

}

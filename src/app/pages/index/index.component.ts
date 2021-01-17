import { Component, OnInit } from '@angular/core';
import { ICharacter } from 'src/app/models/characters.model';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public character?:ICharacter;

  public handleSelect(data:ICharacter){
    this.character = data;
  }

}

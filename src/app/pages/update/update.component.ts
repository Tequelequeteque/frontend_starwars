import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AxiosInstance } from 'axios';
import { ICharacter } from 'src/app/models/characters.model';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(
    @Inject("Api") private api: AxiosInstance,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public character?:ICharacter;

  public handleSelect(data:ICharacter){
    this.character = data;
  }

  public onSubmit(data: ICharacter) {
    this.api.put(`/characters`, data).then(res => this.router.navigate(['index']))
  }

}

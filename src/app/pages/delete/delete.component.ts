import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AxiosInstance } from 'axios';
import { ICharacter } from 'src/app/models/characters.model';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {

  constructor(
    @Inject("Api") private api: AxiosInstance,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public character?: ICharacter;

  public handleSelect(data: ICharacter) {
    this.character = data;
  }

  public onSubmit(data: ICharacter) {
    this.api.delete(`/characters/${data.uuid}`).then(res => this.router.navigate(['index']))
  }

}

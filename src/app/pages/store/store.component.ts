import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AxiosInstance } from 'axios';
import { ICharacter } from 'src/app/models/characters.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(
    @Inject("Api") private api: AxiosInstance,
    private router: Router
  ) { }

  ngOnInit(): void { }

  public onSubmit({ name, age }: ICharacter) {
    this.api.post(`/characters`, { name, age })
      .then(res => this.router.navigate(['index']));
  }
}

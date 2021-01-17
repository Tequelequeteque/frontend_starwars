import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { AxiosInstance } from 'axios';
import { ICharacter } from 'src/app/models/characters.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Output('clickRow') onClickRow: EventEmitter<ICharacter> =
    new EventEmitter();
  constructor(@Inject("Api") private api: AxiosInstance) { }

  ngOnInit(): void {
    this.init();
  }

  public data: ICharacter[] = [];

  private init = async () => {
    this.data = (await this.api.get<ICharacter[]>('characters')).data;
  }

  public handleClick(data: ICharacter) {
    this.onClickRow.emit(data);
  }

}

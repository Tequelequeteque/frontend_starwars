import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ICharacter } from 'src/app/models/characters.model';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})


export class CharacterComponent implements OnInit {

  @Output('onSubmit') onSubmit: EventEmitter<ICharacter> = new EventEmitter();

  @Input('character') character?: ICharacter;
  @Input('store') store = false;
  @Input('update') update = false;
  @Input('delete') delete = false;

  constructor(private router: Router) { }

  public formGroup = new FormGroup({
    uuid: new FormControl(null),
    name: new FormControl(null),
    age: new FormControl(null),
    hasBeenUpdate: new FormControl(null)
  })

  ngOnInit(): void {
  }

  ngOnChanges() {
    if (this.character) {
      this.formGroup.controls.uuid.setValue(this.character.uuid);
      this.formGroup.controls.age.setValue(this.character.age);
      this.formGroup.controls.name.setValue(this.character.name);
      this.formGroup.controls.hasBeenUpdate.setValue(this.character.hasBeenUpdate);
    }
    this.formGroup.updateValueAndValidity();
  }

  public handleSubmit() {
    this.onSubmit.emit(this.formGroup.getRawValue());
  }

  public handleCancel() {
    if (this.store || this.update || this.delete)
      this.router.navigate(['index'])
    else
      this.router.navigateByUrl('/store', { skipLocationChange: true }).then(() => {
        this.router.navigate(['index']);
      });
  };

}

import { Input, Output, EventEmitter } from '@angular/core';

export class EditWidgetComponent {
  @Input('entityDataType') entityDataType = 'text';

  @Input('entity') entity: Object;

  @Input('entityKey') set entityKey(key: string) {
    this.key = key;
    this.originalValue = this.entity[key];
  };

  @Input('entityClass') entityClass: string;

  @Input('style') style: Object;

  @Output('entityUpdated') entityUpdated = new EventEmitter();

  key: string;
  originalValue: string;
  active = false;

  get updateInvalid(): boolean {
    return ( this.entity[this.key] === this.originalValue ) ||
           !this.entity[this.key];
  }

  cancelEdit() {
    this.active = false;
    this.entity[this.key] = this.originalValue;
  }

  updateEntity() {
    if ( this.entity[this.key] === this.originalValue ) return false;

    const update = { [this.key]: this.entity[this.key] };

    this.entityUpdated.emit(update);

    this.active = false;
    this.originalValue = this.entity[this.key];
  }
}

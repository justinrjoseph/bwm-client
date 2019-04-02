import { Component, Input } from '@angular/core';

import { EditWidgetComponent } from '../edit-widget/edit-widget.component';

@Component({
  selector: 'input-edit-widget',
  templateUrl: './input-edit-widget.component.html',
  styleUrls: ['./input-edit-widget.component.scss']
})
export class InputEditWidgetComponent extends EditWidgetComponent {
  @Input('entityDataType') entityDataType = 'text';
}

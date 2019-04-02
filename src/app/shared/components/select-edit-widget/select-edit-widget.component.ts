import { Component, Input } from '@angular/core';

import { EditWidgetComponent } from '../edit-widget/edit-widget.component';

import { Rental } from '../../models';

@Component({
  selector: 'select-edit-widget',
  templateUrl: './select-edit-widget.component.html',
  styleUrls: ['./select-edit-widget.component.scss']
})
export class SelectEditWidgetComponent extends EditWidgetComponent {
  @Input('options') options = Rental.CATEGORIES;
}

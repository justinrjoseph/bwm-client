import { Component } from '@angular/core';

import { EditWidgetComponent } from '../edit-widget/edit-widget.component';

@Component({
  selector: 'textarea-edit-widget',
  templateUrl: './textarea-edit-widget.component.html',
  styleUrls: ['./textarea-edit-widget.component.scss']
})
export class TextareaEditWidgetComponent extends EditWidgetComponent {}

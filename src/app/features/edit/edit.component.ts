import { Component, EventEmitter, Output } from '@angular/core';
import { AlertboxComponent } from '../alertbox/alertbox.component';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [AlertboxComponent],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {

@Output()update:EventEmitter<boolean>=new EventEmitter()
@Output() delete:EventEmitter<boolean>=new EventEmitter

onEdit(){
  this.update.emit(true)
}

onDelete(){
  this.delete.emit(true)
}


}

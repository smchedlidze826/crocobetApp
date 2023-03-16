import { Component, Input } from '@angular/core';
import { Games } from 'src/app/core/intefaces/games';

@Component({
  selector: 'app-collection-holder',
  templateUrl: './collection-holder.component.html',
  styleUrls: ['./collection-holder.component.scss']
})
export class CollectionHolderComponent {
  @Input() games!: Games[] | null;
}

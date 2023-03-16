import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProvidersList } from 'src/app/core/intefaces/slots';

@Component({
  selector: 'app-categories-collection-holder',
  templateUrl: './categories-collection-holder.component.html',
  styleUrls: ['./categories-collection-holder.component.scss']
})
export class CategoriesCollectionHolderComponent {

  @Output() loadSlotsByProvider = new EventEmitter<string>();

  @Input() providersList!: ProvidersList[] | null;
}

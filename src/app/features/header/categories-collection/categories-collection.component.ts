import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { ProvidersList } from 'src/app/core/intefaces/slots';
import { SlotsService } from 'src/app/core/services/slots/slots.service';

@Component({
  selector: 'app-categories-collection',
  templateUrl: './categories-collection.component.html',
  styleUrls: ['./categories-collection.component.scss']
})
export class CategoriesCollectionComponent {
  public providersList$: Observable<ProvidersList[]>;

  @Output() loadSlotsByProvider = new EventEmitter<string>();

  constructor(private slotsService: SlotsService) {
    this.providersList$ = this.slotsService.getProvidersList();
  }

}

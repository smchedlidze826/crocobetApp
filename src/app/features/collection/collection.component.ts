import { Component } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Games } from 'src/app/core/intefaces/games';
import { Slots } from 'src/app/core/intefaces/slots';
import { SlotsService } from 'src/app/core/services/slots/slots.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent {
  public games$: Observable<Games[] | null>

  constructor(private slotsService: SlotsService) {
    this.games$ = this.slotsService.getSlots()
    .pipe(map((slots: Slots[]) => slots.find(slot=> slot.name.includes('პოპულარული'))?.games ?? null))
    // requirements are not clear what parametter I neet to display Top slots 
    // assumed it was the name but still not sure
  }
}

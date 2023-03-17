import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Observable, Subscription, tap } from 'rxjs';
import { Games } from 'src/app/core/intefaces/games';
import { Slots, SlotsByProvider } from 'src/app/core/intefaces/slots';
import { SlotsService } from 'src/app/core/services/slots/slots.service';
import { SlotsSharedService } from 'src/app/pages/main/slots-shared.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit, OnDestroy {
  public games$: Observable<Games[] | null>
  private subs!: Subscription;

  constructor(private slotsService: SlotsService, private slotsSharedService: SlotsSharedService) {
    this.games$ = this.slotsService.getSlots()
      .pipe(map((slots: Slots[]) => slots.find(slot => slot.name.includes('პოპულარული'))?.games ?? null))
    // requirements are not clear what parametter I neet to display Top slots 
    // assumed it was the name but still not sure
  }

  ngOnInit(): void {
    this.subs = this.slotsSharedService.providerChange
      .pipe(
        tap((provider) => this.games$ = this.slotsService.getSlotsByProvider(provider)
          .pipe(map((slots: SlotsByProvider) => slots.games ?? null))
        )
      )
      .subscribe();
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

}

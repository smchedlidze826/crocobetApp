import { Component, OnInit } from '@angular/core';
import { Categories } from 'src/app/core/enums/categories';
import { CategoriesCounter } from 'src/app/core/intefaces/categories-counter';
import { SlotsSharedService } from 'src/app/pages/main/slots-shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  private categoriesCounter: CategoriesCounter[] = [
    { category: Categories.Top, counter: 25, selected: true },
    { category: Categories.Favourites, counter: 125, selected: false },
    { category: Categories.Buy, counter: 125, selected: false },
    { category: Categories.New, counter: 125, selected: false },
    { category: Categories.History, counter: 125, selected: false },
  ]

  public topCounter!: CategoriesCounter;
  public favouriteCounter!: CategoriesCounter;
  public buyCounter!: CategoriesCounter;
  public newCounter!: CategoriesCounter;
  public historyCounter!: CategoriesCounter;

  constructor(private slotSharedService: SlotsSharedService) { }

  ngOnInit(): void {
    this.topCounter = this.categoriesCounter.find(({ category }) => category === Categories.Top) ?? { category: Categories.Top, counter: 25, selected: true };
    this.favouriteCounter = this.categoriesCounter.find(({ category }) => category === Categories.Favourites) ?? { category: Categories.Favourites, counter: 125, selected: false };
    this.buyCounter = this.categoriesCounter.find(({ category }) => category === Categories.Buy) ?? { category: Categories.Buy, counter: 125, selected: false };
    this.newCounter = this.categoriesCounter.find(({ category }) => category === Categories.New) ?? { category: Categories.New, counter: 125, selected: false };
    this.historyCounter = this.categoriesCounter.find(({ category }) => category === Categories.History) ?? { category: Categories.History, counter: 125, selected: false };
  }


  public onSelect(category: Categories): void {
    // =========== 
    // no clear requirements for changing tabs. slots do not have similar values as tabs displayed
    // ==========
  }

  public loadSlotsByProvider(provider: string): void {
    this.slotSharedService.updateProvider(provider);
  }

}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesCollectionHolderComponent } from './categories-collection-holder.component';

describe('CategoriesCollectionHolderComponent', () => {
  let component: CategoriesCollectionHolderComponent;
  let fixture: ComponentFixture<CategoriesCollectionHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesCollectionHolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesCollectionHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

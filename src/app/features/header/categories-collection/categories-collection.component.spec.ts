import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesCollectionComponent } from './categories-collection.component';

describe('CategoriesCollectionComponent', () => {
  let component: CategoriesCollectionComponent;
  let fixture: ComponentFixture<CategoriesCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesCollectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriesCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

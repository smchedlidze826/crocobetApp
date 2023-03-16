import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectionHolderComponent } from './collection-holder.component';

describe('CollectionHolderComponent', () => {
  let component: CollectionHolderComponent;
  let fixture: ComponentFixture<CollectionHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollectionHolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollectionHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

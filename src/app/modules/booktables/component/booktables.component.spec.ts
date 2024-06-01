import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooktablesComponent } from '././booktables.component';

describe('BooktablesComponent', () => {
  let component: BooktablesComponent;
  let fixture: ComponentFixture<BooktablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BooktablesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BooktablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

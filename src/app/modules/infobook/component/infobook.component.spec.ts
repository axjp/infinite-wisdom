import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfobookComponent } from './infobook.component';

describe('InfobookComponent', () => {
  let component: InfobookComponent;
  let fixture: ComponentFixture<InfobookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfobookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfobookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

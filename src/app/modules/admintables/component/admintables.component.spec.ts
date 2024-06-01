import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmintablesComponent } from './admintables.component';

describe('AdmintablesComponent', () => {
  let component: AdmintablesComponent;
  let fixture: ComponentFixture<AdmintablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdmintablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdmintablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Supremo5GDataComponent } from './supremo5-g-data.component';

describe('Supremo5GDataComponent', () => {
  let component: Supremo5GDataComponent;
  let fixture: ComponentFixture<Supremo5GDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Supremo5GDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Supremo5GDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

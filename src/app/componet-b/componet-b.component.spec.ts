import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponetBComponent } from './componet-b.component';

describe('ComponetBComponent', () => {
  let component: ComponetBComponent;
  let fixture: ComponentFixture<ComponetBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponetBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponetBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

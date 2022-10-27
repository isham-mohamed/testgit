import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponetCComponent } from './componet-c.component';

describe('ComponetCComponent', () => {
  let component: ComponetCComponent;
  let fixture: ComponentFixture<ComponetCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponetCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponetCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

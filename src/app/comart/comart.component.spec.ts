import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComartComponent } from './comart.component';

describe('ComartComponent', () => {
  let component: ComartComponent;
  let fixture: ComponentFixture<ComartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

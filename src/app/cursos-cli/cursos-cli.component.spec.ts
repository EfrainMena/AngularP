import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosCliComponent } from './cursos-cli.component';

describe('CursosCliComponent', () => {
  let component: CursosCliComponent;
  let fixture: ComponentFixture<CursosCliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosCliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

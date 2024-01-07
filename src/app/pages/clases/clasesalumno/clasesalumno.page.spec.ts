import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClasesalumnoPage } from './clasesalumno.page';

describe('ClasesalumnoPage', () => {
  let component: ClasesalumnoPage;
  let fixture: ComponentFixture<ClasesalumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ClasesalumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

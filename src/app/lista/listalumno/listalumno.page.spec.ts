import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListalumnoPage } from './listalumno.page';

describe('ListalumnoPage', () => {
  let component: ListalumnoPage;
  let fixture: ComponentFixture<ListalumnoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListalumnoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

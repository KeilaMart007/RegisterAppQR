import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaprofesorPage } from './listaprofesor.page';

describe('ListaprofesorPage', () => {
  let component: ListaprofesorPage;
  let fixture: ComponentFixture<ListaprofesorPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ListaprofesorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NodoPage } from './nodo.page';

describe('NodoPage', () => {
  let component: NodoPage;
  let fixture: ComponentFixture<NodoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NodoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

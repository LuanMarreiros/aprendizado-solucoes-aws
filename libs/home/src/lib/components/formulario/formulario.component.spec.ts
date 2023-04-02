import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioComponent } from './formulario.component';

describe('FormularioComponent', () => {
  let component: FormularioComponent;

  beforeEach(() => {
    component = new FormularioComponent();
  })

  it('deve ser iniciado', () => {
    const spy = jest.spyOn(component, 'ngOnInit');

    component.ngOnInit();

    expect(spy).toBeCalled();
  })
});

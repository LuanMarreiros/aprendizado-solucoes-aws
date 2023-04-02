import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;

  beforeEach(() => {
    component = new AppComponent();
  })

  it('deve ser iniciado', () => {
    const spy = jest.spyOn(component, 'ngOnInit');

    component.ngOnInit();

    expect(spy).toBeCalled();
  })
});

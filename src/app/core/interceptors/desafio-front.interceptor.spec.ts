import { createSpyObj } from 'jest-createspyobj';
import { AuthInterceptor } from './desafio-front.interceptor';

describe('AuthInterceptor', () => {
  let instance: AuthInterceptor;

  function createInstance() {
    instance = new AuthInterceptor(
    );
  }

  beforeEach(() => {

    createInstance();
  });

  it('should create', () => {
    expect(instance).toBeTruthy();
  });

});

import { TestBed } from '@angular/core/testing';
import { createSpyObj } from 'jest-createspyobj';
import { LoaderService } from './loader.service';
import { DOCUMENT } from '@angular/common';

describe('LoaderService', () => {
  let service: LoaderService;
  let fakeDocument: jest.Mocked<Document>;

  beforeEach(async () => {
    fakeDocument = createSpyObj<Document>(Document, []);

    await TestBed.configureTestingModule({
      providers: [
        { provide: DOCUMENT, useFactory: () => fakeDocument },
        LoaderService
      ]
    });
    service = TestBed.inject(LoaderService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  describe('METHOD: start', () => {
    it.skip('NOT IMPLEMENTED: should do something', () => {
      // TODO implement test
      // service.start();
    });
  });

  describe('METHOD: stop', () => {
    it.skip('NOT IMPLEMENTED: should do something', () => {
      // TODO implement test
      // service.stop();
    });
  });

});

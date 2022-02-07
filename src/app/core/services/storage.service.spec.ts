import { TestBed } from '@angular/core/testing';
import { createSpyObj } from 'jest-createspyobj';
import { StorageService } from './storage.service';

describe('StorageService', () => {
  let service: StorageService;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      providers: [
        StorageService
      ]
    });
    service = TestBed.inject(StorageService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

});

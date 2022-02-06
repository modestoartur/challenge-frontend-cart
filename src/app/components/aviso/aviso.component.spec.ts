import { Overlay } from '@angular/cdk/overlay';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import {
  MsalBroadcastService,
  MsalService,
  MSAL_GUARD_CONFIG,
  MSAL_INSTANCE,
} from '@azure/msal-angular';
import {
  MSALGuardConfigFactory,
  MSALInstanceFactory,
} from 'src/app/app.module';
import { AvisoComponent } from './aviso.component';
describe('AvisoComponent - ', () => {
  let component: AvisoComponent;
  let fixture: ComponentFixture<AvisoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],
      declarations: [AvisoComponent],
      providers: [
        MsalService,
        {
          provide: MSAL_INSTANCE,
          useFactory: MSALInstanceFactory,
        },
        {
          provide: MSAL_GUARD_CONFIG,
          useFactory: MSALGuardConfigFactory,
        },
        MatSnackBar,
        MsalBroadcastService,
        Overlay,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Deveria rodar #constructor()', async () => {
    expect(component).toBeTruthy();
  });

  it('Deveria rodar #ngOnInit()', async () => {
    component.ngOnInit();
    // expect(component.document.querySelector).toHaveBeenCalled();
  });

  it('Deveria rodar #ngOnDestroy()', async () => {
    component.ngOnDestroy();
  });
});

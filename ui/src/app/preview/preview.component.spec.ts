//
// Swiss QR Bill Generator
// Copyright (c) 2017 Manuel Bleichenbacher
// Licensed under MIT License
// https://opensource.org/licenses/MIT
//
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonToggleModule, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

import { PreviewComponent } from './preview.component';

class MatDialogRefMock {
}

class DialogDataMock {
  billID: string = 'eJytjsFOhDAQhl-l6XkXWwq07G0lUUwMUXaTTcxeCo6lEWpsQY3Gt_ExvO2L2cJBH8DL_PPP5J9vPvALWKefDN7QFe6lUZNUgDcYDF7hZ7uHt9G73U1xtEdDKCFBaShFmTNCeBYTSrOYiTTOUx4W1yDRTg8DmOAOoE0DVrnRSucgjNicT1MSBy0n8w7Gtd2r7pe7oZ7L5h-u-H-j5eWivAjinxVrwtZLuNbuEdXSl-1l8FfmfvIEDX8wPtEEFYSkQe9O31a33S_jtq5nVMySNOMiJ3PHeCISzgTLWT6joO3MZBSqbIT8PmfoDG2nBw9SiNGIRh7E_aySbSdtA3oE462C4fTlHNpDj0ofrbRS-PMHbmCSXQ~~';
}


describe('PreviewComponent', () => {
  let component: PreviewComponent;
  let fixture: ComponentFixture<PreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PreviewComponent
      ],
      imports: [
        FormsModule,
        MatButtonToggleModule,
        MatDialogModule
      ],
      providers: [
        {
          provide: MatDialogRef,
          useClass: MatDialogRefMock
        },
        {
          provide: MAT_DIALOG_DATA,
          useClass: DialogDataMock
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
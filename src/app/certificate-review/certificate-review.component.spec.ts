import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateReviewComponent } from './certificate-review.component';

describe('CertificateReviewComponent', () => {
  let component: CertificateReviewComponent;
  let fixture: ComponentFixture<CertificateReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertificateReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

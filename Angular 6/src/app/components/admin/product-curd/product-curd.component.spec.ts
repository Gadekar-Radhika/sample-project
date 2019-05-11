import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCURDComponent } from './product-curd.component';

describe('ProductCURDComponent', () => {
  let component: ProductCURDComponent;
  let fixture: ComponentFixture<ProductCURDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCURDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCURDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

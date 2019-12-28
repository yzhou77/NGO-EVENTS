import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyusersComponent } from './myusers.component';

describe('MyusersComponent', () => {
  let component: MyusersComponent;
  let fixture: ComponentFixture<MyusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

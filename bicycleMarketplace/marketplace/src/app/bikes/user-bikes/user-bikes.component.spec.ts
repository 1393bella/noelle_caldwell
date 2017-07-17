import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBikesComponent } from './user-bikes.component';

describe('UserBikesComponent', () => {
  let component: UserBikesComponent;
  let fixture: ComponentFixture<UserBikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

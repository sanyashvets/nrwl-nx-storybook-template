import { TestBed } from '@angular/core/testing';
import { UserService } from './user.service';
import { UserComponent } from '../../../apps/app-one/src/app/user/user.component';

describe('UserService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    });
  });

  it('should work', () => {
    expect(new UserService()).toBeDefined();
  });

  it('should use the user name from the service', () => {
    const fixture = TestBed.createComponent(UserComponent);
    const app = fixture.debugElement.componentInstance;
    const userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    expect(userService.getUser().name).toEqual(app.user.name);
  });

});

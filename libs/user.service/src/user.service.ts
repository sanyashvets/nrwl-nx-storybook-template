export class UserService {
  private user = {
    name: 'Alex'
  };

  getUser() {
    return this.user;
  }
}

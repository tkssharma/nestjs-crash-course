import { Injectable, NotFoundException } from '@nestjs/common';
import { User } from './interface/user';

@Injectable()
export class UserService {
  public users: User [] = [];
  getUsers(): User [] {
    return this.users;
  }
  async getUser(email: string): Promise<User> {
    const userData = this.users.filter( i => i.email === email);
    if(userData && Array.isArray(userData) && userData.length > 0){
        return Promise.resolve(userData[0])
    }
    throw new NotFoundException('user not found');
  }
  addUser(user: User): User {
      this.users.push(user);
      return user;
  }
  deleteUser(email: string): User [] {
    const remainingUser = this.users.filter(i => i.email !== email);
    this.users = remainingUser;
    return remainingUser || [];
  }
}

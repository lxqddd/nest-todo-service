import { Injectable } from '@nestjs/common'

@Injectable()
export class UserService {
  getUserName() {
    return '向阳'
  }
}

import { User } from "../../data";
import { CustomError } from "../../domain/errors";

export class UserService {
  constructor() {}

  public async getUsers () {
    try {
      const users = await User.find()
      return users
    } catch (error) {
      throw CustomError.internalServer('Internal server error')
    }
  }
}
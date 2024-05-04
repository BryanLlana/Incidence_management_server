import { Request, Response } from "express"
import { CustomError } from "../../domain/errors"
import { UserService } from "../services"

export class UserController {
  constructor(
    private readonly userService: UserService
  ){}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message })
    }

    console.log(`${error}`)
    return res.status(500).json({ error: 'Internal server error ' })
  }

  public getUsers = (request: Request, response: Response) => {
    this.userService.getUsers()
      .then(result => response.status(200).json(result))
      .catch(error => this.handleError(error, response))
  }
}
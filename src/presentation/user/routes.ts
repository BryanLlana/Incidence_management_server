import { Router } from "express";
import { UserService } from "../services";
import { UserController } from "./controller";

export class UserRoutes {
  static get routes(): Router {
    const router = Router()
    const service = new UserService()
    const controller = new UserController(service)

    router.get('/', controller.getUsers)

    return router
  }
}
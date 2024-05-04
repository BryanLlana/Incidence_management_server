import { Router } from "express";
import { IncidenceRoutes } from "./incidence";
import { UserRoutes } from "./user";

export class AppRoutes {
  static get routes(): Router {
    const router = Router()

    router.use('/api/incidence', IncidenceRoutes.routes)
    router.use('/api/user', UserRoutes.routes)

    return router
  }
}
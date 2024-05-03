import { Router } from "express";
import { IncidenceRoutes } from "./incidence";

export class AppRoutes {
  static get routes(): Router {
    const router = Router()

    router.use('/api/incidence', IncidenceRoutes.routes)

    return router
  }
}
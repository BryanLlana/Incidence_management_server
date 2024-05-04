import { Router } from "express";
import { IncidenceController } from "./controller";
import { IncidenceService } from "../services";

export class IncidenceRoutes {
  static get routes(): Router {
    const router = Router()
    const service = new IncidenceService()
    const controller = new IncidenceController(service)

    router.post('/', controller.createIncidence)
    router.get('/', controller.getIncidents)

    return router
  }
}
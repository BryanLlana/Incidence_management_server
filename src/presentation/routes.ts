import { Router } from "express";
import { IncidenceRoutes } from "./incidence";
import { UserRoutes } from "./user";
import { FileUploadRoutes } from "./file-upload";

export class AppRoutes {
  static get routes(): Router {
    const router = Router()

    router.use('/api/incidence', IncidenceRoutes.routes)
    router.use('/api/user', UserRoutes.routes)
    router.use('/api/upload', FileUploadRoutes.routes)

    return router
  }
}
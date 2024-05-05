import { Router } from "express";
import { IncidenceRoutes } from "./incidence";
import { UserRoutes } from "./user";
import { FileUploadRoutes } from "./file-upload";
import { ImageRoutes } from "./image";

export class AppRoutes {
  static get routes(): Router {
    const router = Router()

    router.use('/api/incidence', IncidenceRoutes.routes)
    router.use('/api/user', UserRoutes.routes)
    router.use('/api/upload', FileUploadRoutes.routes)
    router.use('/api/image', ImageRoutes.routes)

    return router
  }
}
import { Router } from "express";
import { FileUploadController } from "./controller";
import { FileUploadService } from "../services";
import { FileUploadMiddleware } from "../middlewares/file-upload.middleware";

export class FileUploadRoutes {
  static get routes(): Router {
    const router = Router()
    const service = new FileUploadService()
    const controller = new FileUploadController(service)

    router.post('/single/:type', FileUploadMiddleware.containFiles, controller.uploadFile)

    return router
  }
}
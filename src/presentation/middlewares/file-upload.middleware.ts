import { NextFunction, Request, Response } from "express";

export class FileUploadMiddleware {
  static containFiles(request: Request, response: Response, next: NextFunction) {
    if (!request.files || Object.keys(request.files).length === 0) {
      return response.status(400).json({ error: 'No files were selected'})
    }

    if (!Array.isArray(request.files.image)) {
      request.body.files = [request.files.image]
    } else {
      request.body.files = request.files.image
    }

    next()
  }
}
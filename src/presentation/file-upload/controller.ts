import { Request, Response } from "express";
import { FileUploadService } from "../services";
import { UploadedFile } from "express-fileupload";
import { CustomError } from "../../domain/errors";

export class FileUploadController {
  constructor(
    private readonly fileUploadService: FileUploadService
  ){}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message })
    }

    console.log(`${error}`)
    return res.status(500).json({ error: 'Internal server error ' })
  }

  public uploadFile = (request: Request, response: Response) => {
    const type = request.params.type
    const validTypes = ['incidence']
    if (!validTypes.includes(type)) {
      return response.status(400).json({ error: 'Invalid type'})
    }
    
    const file = request.body.files[0] as UploadedFile

    this.fileUploadService.uploadSingleFile(file, `/uploads/${type}`)
      .then(uploaded => response.json(uploaded))
      .catch(error => this.handleError(error, response))
  }
}
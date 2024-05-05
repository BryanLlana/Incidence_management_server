import { Request, Response } from "express";
import path from "path";
import fs from 'fs';

export class ImageController {
  constructor(){}

  public getImage = (request: Request, response: Response) => {
    const { type, image } = request.params
    const imagePath = path.join(__dirname, `../../../uploads/${type}/${image}`)
    if (!fs.existsSync(imagePath)) {
      return response.status(404).json('Image not found')
    }

    response.sendFile(imagePath)
  }
}
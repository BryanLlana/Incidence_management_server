import { UploadedFile } from "express-fileupload";
import fs from "fs";
import path from "path";
import { v4 } from 'uuid'
import { CustomError } from "../../domain/errors";

export class FileUploadService {
  constructor() {}

  private checkFolder(folderPath: string) {
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath)
    }
  }

  public async uploadSingleFile(
    file: UploadedFile,
    folder: string = 'uploads',
    validExtensions: string[] = ['png','jpg','jpeg']
  ) {
    const fileExtension = file.mimetype.split('/')[1]
    if (!validExtensions.includes(fileExtension)) {
      throw CustomError.badRequest(`Invalid extension: ${fileExtension}`)
    }

    const destination = path.join(__dirname, '../../../', folder)
    this.checkFolder(destination)

    const fileName = `${v4()}.${fileExtension}`
    file.mv(destination + `/${fileName}`)

    return { fileName }
  }
}
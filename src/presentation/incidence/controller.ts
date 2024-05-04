import { Request, Response } from "express";
import { CustomError } from "../../domain/errors";
import { IncidenceService } from "../services";
import { CreateIncidenceDto } from "../../domain/dtos";

export class IncidenceController {
  constructor(
    private readonly incidenceService: IncidenceService
  ){}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message })
    }

    console.log(`${error}`)
    return res.status(500).json({ error: 'Internal server error ' })
  }

  public createIncidence = (request: Request, response: Response) => {
    const [errors, createIncidenceDto] = CreateIncidenceDto.create(request.body)
    if (errors) return response.status(400).json({ errors })

    this.incidenceService.createIncidence(createIncidenceDto!)
      .then(result => response.status(200).json(result))
      .catch(error => this.handleError(error, response))
  }

  public getIncidents = (request: Request, response: Response) => {
    this.incidenceService.getIncidents()
      .then(result => response.status(200).json(result))
      .catch(error => this.handleError(error, response))
  }

  public getIncidence = (request: Request, response: Response) => {
    this.incidenceService.getIncidence(request.params.id)
      .then(result => response.status(200).json(result))
      .catch(error => this.handleError(error, response))
  }

  public updateIncidence = (request: Request, response: Response) => {

  }

  public deleteIncidence = (request: Request, res: Response) => {

  }
}
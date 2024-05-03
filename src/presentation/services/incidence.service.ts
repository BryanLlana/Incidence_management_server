import { Incidence } from "../../data";
import { CreateIncidenceDto } from "../../domain/dtos";
import { CustomError } from "../../domain/errors";

export class IncidenceService {
  constructor() {}

  public async  createIncidence (createIncidenceDto: CreateIncidenceDto) {
    try {
      const { title, description, type, location } = createIncidenceDto
      const incidence = new Incidence()
      incidence.title = title
      incidence.description = description
      incidence.type = type
      incidence.location = location
      await incidence.save()
      return { message: 'Incident created successfully'}
    } catch (error) {
      throw CustomError.internalServer('Internal server')
    }
  }
}
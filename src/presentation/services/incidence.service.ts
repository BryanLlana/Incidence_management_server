import { Incidence } from "../../data";
import { CreateIncidenceDto } from "../../domain/dtos";
import { CustomError } from "../../domain/errors";

export class IncidenceService {
  constructor() {}

  public async createIncidence (createIncidenceDto: CreateIncidenceDto) {
    try {
      const { title, description, type, location, userId } = createIncidenceDto
      const incidence = new Incidence()
      incidence.title = title
      incidence.description = description
      incidence.type = type
      incidence.location = location
      incidence.user = userId
      await incidence.save()
      return { message: 'Incident created successfully'}
    } catch (error) {
      throw CustomError.internalServer('Internal server')
    }
  }

  public async getIncidents () {
    try {
      const incidents = Incidence.find()
      return incidents
    } catch (error) {
      throw CustomError.internalServer('Internal server')
    }
  }

  public async getIncidence (id: string) {
    const incidence = await Incidence.findOne({
      where: {
        id
      }
    })

    if (!incidence) throw CustomError.notFound('Incidence not found')
    return incidence
  }
}
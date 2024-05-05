import { Incidence } from "../../data";
import { CreateIncidenceDto } from "../../domain/dtos";
import { CustomError } from "../../domain/errors";

export class IncidenceService {
  constructor() {}

  public async createIncidence (createIncidenceDto: CreateIncidenceDto) {
    try {
      const { title, description, type, location, userId, image } = createIncidenceDto
      const incidence = new Incidence()
      incidence.title = title
      incidence.description = description
      incidence.type = type
      incidence.location = location
      incidence.user = userId
      incidence.image = image
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

  public async updateIncidence (id: string, values: {[key: string]: any}) {
    if (Object.values(values).length === 0) {
      throw CustomError.badRequest('You must enter a field that you want to update')
    }
    const {userId, ...form} = values
    await this.getIncidence(id)
    try {
      const incidenceUpdate = await Incidence.preload({
        id,
        ...form,
        user: userId
      })
      await Incidence.save(incidenceUpdate!)
      return {
        message: 'Incidence updated correctly'
      }
    } catch (error) {
      throw CustomError.badRequest('Internal server')
    }
  }

  public async deleteIncidence (id: string) {
    const incidence = await this.getIncidence(id)
    try {
      await Incidence.remove(incidence)
      return { 
        message: 'Incidence successfully removed'
      }
    } catch (error) {
      throw CustomError.internalServer('Internal server')
    }
  }

  public async updateStatus (id: string) {
    const incidence = await this.getIncidence(id)
    try {
      const incidenceUpdate = await Incidence.preload({
        id,
        status: !incidence.status
      })
      await Incidence.save(incidenceUpdate!)
      return {
        message: 'Status updated correctly'
      }
    } catch (error) {
      throw CustomError.internalServer('Internal server')
    }
  }
}
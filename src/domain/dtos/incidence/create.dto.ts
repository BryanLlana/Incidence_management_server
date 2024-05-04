export class CreateIncidenceDto {
  constructor(
    public readonly title: string,
    public readonly description: string,
    public readonly type: string,
    public readonly location: string,
    public readonly userId: number
  ){}

  static create(object: { [key: string]: any }): [Object?, CreateIncidenceDto?] {
    const { title, description, type, location, userId } = object
    const errors: { [key: string]: any } = {}

    if (!title) errors.title = "Title is required"
    if (!description) errors.description = "Description is required"
    if (!type) errors.type = "Type is required"
    if (!location) errors.location = "Location is required"
    if (!userId) errors.userId = "User id is required"

    if (Object.values(errors).length > 0) return [errors, undefined]
    return [undefined, new CreateIncidenceDto(title, description, type, location, userId)]
  }
}
export class CreateIncidenceDto {
  constructor(
    public readonly title: string,
    public readonly description: string,
    public readonly type: string,
    public readonly location: string,
    public readonly userId: number,
    public readonly image: string
  ){}

  static create(object: { [key: string]: any }): [Object?, CreateIncidenceDto?] {
    const { title, description, type, location, userId, image } = object
    const errors: { [key: string]: any } = {}

    if (!title) errors.title = "Title is required"
    if (!description) errors.description = "Description is required"
    if (!type) errors.type = "Type is required"
    if (!location) errors.location = "Location is required"
    if (!userId) errors.userId = "User id is required"
    if (!image) errors.image = "Image is required"

    if (Object.values(errors).length > 0) return [errors, undefined]
    return [undefined, new CreateIncidenceDto(title, description, type, location, userId, image)]
  }
}
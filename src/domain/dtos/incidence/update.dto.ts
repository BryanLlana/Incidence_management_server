export class UpdateIncidenceDto {
  constructor(
    public readonly title?: string,
    public readonly description?: string,
    public readonly type?: string,
    public readonly location?: string,
    public readonly userId?: number
  ){}

  get values () {
    const returnObj: {[key: string]: any} = {}
    if(this.title) returnObj.title = this.title
    if(this.description) returnObj.description = this.description
    if(this.type) returnObj.type = this.type
    if(this.location) returnObj.location = this.location
    if(this.userId) returnObj.userId = this.userId

    return returnObj
  }

  static create(object: {[key: string]: any}): [Object?, UpdateIncidenceDto?] {
    const { title, description, type, location, userId } = object
    return [undefined, new UpdateIncidenceDto(title, description, type, location, userId)]
  }
}
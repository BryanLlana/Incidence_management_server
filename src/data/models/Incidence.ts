import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity } from 'typeorm'

@Entity('incidents')
export class Incidence extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column("varchar", {
    length: 100
  })
  title: string

  @Column("longtext")
  description: string

  @Column("varchar", {
    length: 50
  })
  type: string

  @Column("varchar", {
    length: 100
  })
  location: string

  @Column("varchar", {
    length: 100
  })
  image: string

  @Column("bool", {
    default: false
  })
  status: boolean

  @CreateDateColumn()
  createdAt: Date
}
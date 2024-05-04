import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, BaseEntity, ManyToOne } from 'typeorm'
import { User } from './User'

@Entity('incidents')
export class Incidence extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string

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
    length: 100,
    default: ''
  })
  image: string

  @Column("bool", {
    default: false
  })
  status: boolean

  @CreateDateColumn()
  createdAt: Date

  @ManyToOne(() => User, (user) => user.incidents, {
    eager: true
  })
  user: number
}
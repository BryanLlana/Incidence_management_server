import { Column, Entity, PrimaryGeneratedColumn, BaseEntity, OneToMany } from 'typeorm'
import { Incidence } from './Incidence'

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number

  @Column("varchar", {
    length: 100
  })
  name: string

  @Column("varchar", {
    length: 100
  })
  lastname: string

  @Column("varchar", {
    length: 50 
  })
  role: string

  @OneToMany(() => Incidence, (incidence) => incidence.userId)
  incidents: Incidence[]
}
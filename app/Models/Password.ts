import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Password extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public service: string

  @column()
  public password: string

  @column()
  public username: string

  @column()
  public mail: string
}

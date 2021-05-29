//import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import { BaseModel, beforeSave, column } from '@ioc:Adonis/Lucid/Orm'
const CryptoJS = require('crypto-js')


export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public username: string

  @column()
  public email: string

  @column({serializeAs: null})
  public password: string

  @column()
  public privateKey: string

  @column()
  public publicKey: string

  @beforeSave()
  public static async hashPassword(user: User){
      if(user.$dirty.password) {
        /*let encryptor = Encryption.child({
          secret: user.password
        })
        user.privateKey = encryptor.encrypt(user.privateKey)*/
        user.privateKey = CryptoJS.AES.encrypt(user.privateKey, user.password).toString()
        user.password = await Hash.make(user.password)
      }
  }


/*   @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime */
}

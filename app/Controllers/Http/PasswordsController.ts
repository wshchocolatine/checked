import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Password from 'App/Models/Password'
import Database from '@ioc:Adonis/Lucid/Database'
const CryptoJS = require('crypto-js')

export default class PasswordsController {
    public async Post({request, auth}: HttpContextContract) {
        try {
            let {service, password, username, mail} = request.only(['service', 'password', 'username', 'mail'])

            let payload = {
                id: parseInt(String(Math.floor(Math.random() * Date.now())).slice(0, 10)),
                service: service,
                password: CryptoJS.AES.encrypt(password, auth.user!.publicKey).toString(),
                username: username,
                mail: mail
            }
    
            await Password.create(payload)
            return 200
        } catch(e) {
            console.log(e)
            return 500
        }
    }

    public async Get({auth, session, response}: HttpContextContract) {
        try {
            let id = auth.user!.id
            let privateKey = session.get('key')

            let passwords = (await Database.from('passwords').where('owner', id)).forEach(element => {
                //Deciphering them
                let hex = CryptoJS.AES.decrypt(element.password, privateKey)
                let password = CryptoJS.enc.Utf8.stringify(hex)

                //Changing
                element.password = password
            })

            response.json(passwords)
        } catch(e) {
            console.log(e)
            return 500
        }
    }
}

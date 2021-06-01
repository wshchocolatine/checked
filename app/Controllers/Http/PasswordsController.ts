import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Password from 'App/Models/Password'
import Database from '@ioc:Adonis/Lucid/Database'
import Crypto from 'crypto'

export default class PasswordsController {
    public async Post({request, auth}: HttpContextContract) {
        try {
            let {service, password, username, email} = request.only(['service', 'password', 'username', 'email'])
            let passwordHashed = Crypto.publicEncrypt(auth.user!.publicKey, Buffer.from(password)).toString('base64')


            let payload = {
                id: parseInt(String(Math.floor(Math.random() * Date.now())).slice(0, 10)),
                service: service,
                password: passwordHashed,
                username: username,
                email: email,
                owner: auth.user!.id
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

            let passwords = await Database.from('passwords').where('owner', id)
            passwords.forEach(element => {
                //Decipher them
                let keyBuffer = Buffer.from(privateKey)
                let passwordBuffer = Buffer.from(element.password, 'base64')
                let password = Crypto.privateDecrypt(keyBuffer, passwordBuffer).toString()

                //Send
                element.password = password
            })

            response.json(passwords)
        } catch(e) {
            console.log(e)
            return 500
        }
    }

    public async Delete({request}: HttpContextContract) {
        try {
            let {id} = request.only(['id'])
            await Database.from('passwords').where('id', id).delete()

            return 200;
        } catch(e) {
            console.log(e)
            return 500
        }
    }
}

import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import StoreUserValidator from 'App/Validators/StoreUserValidator'

//Modules
let crypto = require('crypto')
const CryptoJS = require('crypto-js')

export default class AuthController {
    public async Register({ request, auth }: HttpContextContract): Promise<string | number | void> {
        try {
            //Validate request body
            let { username, email, password } = await request.validate(StoreUserValidator)

            //Creating keys 
            let { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
                modulusLength: 2048,
                publicKeyEncoding: { type: 'spki', format: 'pem' },
                privateKeyEncoding: { type: 'pkcs8', format: 'pem' }
            })

            //Payload creating
            let payload = {
                id: parseInt(String(Math.floor(Math.random() * Date.now())).slice(0, 10)),
                username: username,
                email: email,
                password: password,
                privateKey: privateKey,
                publicKey: publicKey
            }

            //Creating User
            let user = await User.create(payload)

            //Login User
            await auth.login(user)

            return 200     
        } catch(e) {
            console.log(e)
            return 500
        }
    }

    public async Login({ request, auth, session }: HttpContextContract): Promise<number | void> {
        let { email, password } = request.only(['email', 'password'])

        try {
            await auth.attempt(email, password)
            session.put('key', CryptoJS.enc.Utf8.stringify(CryptoJS.AES.decrypt(auth.user!.privateKey, password)))
        } catch (e) {
            return 400
        }

        return 200
    }

    public async Logout({ auth }: HttpContextContract): Promise<string | void> {
        await auth.logout()
        return 'carré'
    }
}

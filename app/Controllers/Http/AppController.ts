import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database';

export default class AppsController {
    public async Index({ auth, response }: HttpContextContract) {
        try {
            await auth.authenticate()
            response.redirect('/dashboard')
            return;
        } catch (e) {
            response.redirect('/register')
            return;
        }
    }

    public async Account({auth, response}: HttpContextContract) {
        try {
            let passwords = await Database.from('passwords').where('owner', auth.user!.id)
            let length = passwords.length
            let username = auth.user!.username
            let email = auth.user!.email

            response.json({
                length: length,
                username: username,
                email: email
            })
        } catch (e) {
            return 500
        }
    }
}

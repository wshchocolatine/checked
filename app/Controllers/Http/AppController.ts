import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AppsController {
    public async Index({auth, response}: HttpContextContract) {
        try {
            await auth.authenticate()
            response.redirect('/dashboard')
            return;
        } catch(e) {
            response.redirect('/login')
            return;
        }
    } 
}

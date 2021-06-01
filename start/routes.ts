/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', 'AppController.Index')

Route.post('register', 'AuthController.Register')
Route.post('login', 'AuthController.Login')
Route.get('logout', 'AuthController.Logout')

Route.group(() => {
  Route.post('passwords', 'PasswordsController.Post')
  Route.get('passwords', 'PasswordsController.Get')
  Route.delete('passwords', 'PasswordsController.Delete')
  Route.get('api/account', 'AppController.Account')
}).middleware(['auth'])

Route.group(() => {
  Route.on('dashboard').render('dashboard.edge')
  Route.on('new').render('new')
  Route.on('account').render('account')
}).middleware(['auth'])

Route.on('about').render('about')

Route.on('login').render('login')
Route.on('register').render('register')

Route.on('*').render('404')
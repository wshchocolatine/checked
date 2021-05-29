import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {

      //Public Info
      table.float('id', 10).primary()
      table.string('username', 20).notNullable()
      table.string('email', 200).unique().notNullable()
      //Private Info
      table.string('password', 200).notNullable()
      table.text('private_key').notNullable()
      table.text('public_key').notNullable()

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true }) */
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

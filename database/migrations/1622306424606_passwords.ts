import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Passwords extends BaseSchema {
  protected tableName = 'passwords'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.float('id', 10)
      table.string('service')
      table.string('password')
      table.string('username')
      table.string('mail')
      table.integer('owner')

      /**
       * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
       */
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}

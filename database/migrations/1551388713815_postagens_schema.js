'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostagensSchema extends Schema {
  up () {
    this.create('postagens', (table) => {
      table.increments()
      table.string("titulo",255).notNullable()
      table.text("corpo",255).notNullable()
      table.string("imagem",255).notNullable()

      table.integer("usuarioid").unsigned()

      table.foreign("usuarioid").references("id").inTable("users")

      table.timestamps()
    })
  }

  down () {
    this.drop('postagens')
  }
}

module.exports = PostagensSchema

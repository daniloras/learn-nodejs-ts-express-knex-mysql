import Knex from "knex";

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('points', table => {
    table.increments('id').primary();
    table.text('image').notNullable();
    table.text('name').notNullable();
    table.text('email').notNullable();
    table.text('whatsapp').notNullable();
    table.decimal('latitude').notNullable();
    table.decimal('longitude').notNullable();
    table.text('city').notNullable();
    table.text('uf').notNullable();
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('points')
}

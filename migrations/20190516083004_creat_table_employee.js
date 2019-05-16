
exports.up = async function(knex, Promise) {
	await knex.schema.hasTable('employee')

    return await knex.schema.createTable('employee', (table) => {
	  table.increments('id')
	  table.string('name').notNullable()
	  table.string('address').notNullable()
	  table.integer('salary').notNullable()
	  table.integer('age').notNullable()
	})
};

exports.down = function(knex, Promise) {
  
};

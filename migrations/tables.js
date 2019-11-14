exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (tbl) => {
  
        tbl.increments();

        tbl.string('email', 255)
            .notNullable()
        
        tbl.string('username', 255)
           .notNullable()
           .unique()
        
        tbl.string('password', 255)
           .notNullable()
  
    })
  
    .createTable('trainingLogs', (tbl) => {

        tbl.increments();

        tbl.string('load', 255) 
           .notNullable() //required
        
        tbl.string('exercise', 255) 
           .notNullable() //required
        
        tbl.string('duration', 255) 
           .notNullable() //required

        tbl.string('effort', 255) 
           .notNullable() //required
        
        tbl.string('impression', 255) 
           .notNullable() //required

        tbl.string('problem', 255) 
           .notNullable() //required

        tbl.boolean('failOrSucceed') 
           .notNullable() //required

        tbl.integer('tryHard', 1) 
           .notNullable() //required

        tbl.date('date', 255) //Date the workout takes place

        tbl.integer('user_id').notNullable()
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE') //required
    })
  };
  
  exports.down = function(knex, Promise) {
        return knex.schema
            .dropTableIfExists('users')
            .dropTableIfExists('trainingLogs')
  };
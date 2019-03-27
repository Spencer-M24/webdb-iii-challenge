
exports.seed = function(knex, Promise) {

REMOVING
    
    return knex('cohorts')
        
    .truncate()


        .then(function() {


SEED INPUTS

return knex('cohorts').insert([

    { name: 'one' },

    { name: 'two' },

    { name: 'three' }

]);
		});
};

exports.seed = function(knex, Promise) {

Remove
    return knex('students')
    
    .truncate()
    
        .then(function() {
        
        
        Seeds Here
            
        return knex('students').insert([
        
            { name: 'name1', cohort_id: '1' },
        
        
            { name: 'name2', cohort_id: '1' },
                
            { name: 'name3', cohort_id: '2' }
			]);
		});
};
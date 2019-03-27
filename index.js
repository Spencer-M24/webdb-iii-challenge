// Import moduels

const express = require('express');

const server = express ();

server.use (express.json());

const knex = require('knex');
const knexConfig = require('./knexfile');
const db = knex(knexConfig.development);

// Trying something new Comments
//  Instructions  What to do [POST] /api/cohorts This route should save a new cohort to the database.



server.post('/api/cohorts', (req, res) => {
    
    
    const cohort = req.body;
    
    db('cohorts')
    
    .insert(cohort)
    
    .then(ids => {
            
        res.status(201).json(ids);
    

        })
        
        .catch(err => {
        
            res.status(500).json(err);
		});
});


// [GET] /api/cohorts This route will return an array of all cohorts.

server.get('/api/cohorts', (req, res) => {
    
    db.from('cohorts')
    
    .then(list => {
    
        res.status(200).json(list);
		})
    
        .catch(err => {
    
            res.status(500).json(err);
		});
});

// [GET] /api/cohorts/:id This route will return the cohort with the matching id.


server.get('/api/cohorts/:id', (req, res) => {
    
    const uniqueCohort = req.params.id;
    
    db.from('cohorts')
    
    .where({ id: uniqueCohort })
    
    .then(cohort => {
    
        res.status(200).json(cohort);
		})
    
        .catch(err => {
    
            res.status(500).json(err);
		});
});


// [GET] /api/cohorts/:id/students returns all students for the cohort with the specified id.

server.get('/api/cohorts/:id/students', (req, res) => {
    
    const cohortForStudents = req.params.id;
    
    db.from('students')
    
    .where({ cohort_id: '1' })
    
    .then(students => {
    
        res.status(200).json(students);
    
    })
    
    .catch(err => {
    
        res.status(500).json(err);
    
    });
});


// [PUT] /api/cohorts/:id This route will update the cohort with the matching id using information sent in the body of the request.

server.put('/api/cohorts/:id', (req, res) => {
    
    const cohortToModify = req.params.id;
    
    db('cohorts')
    
    .where({ id: cohortToModify })
    
    .update(req.body)
    
    .then(numberUpdated => {
    
        res.status(200).json(numberUpdated);
		})
    
        .catch(err => {
    
            res.status(500).json(err);
		});
});



// [DELETE] /api/cohorts/:id This route should delete the specified cohort.

server.delete('/api/cohorts/:id/', (req, res) => {
    
    const cohortToDelete = req.params.id;
    
    db('cohorts')
    
    .where({ id: cohortToDelete })
    
    .del()
    
    .then(numDeleted => {
    
        res.status(200).json(numDeleted);
    
    })
    
    .catch(err => {
    
        res.status(500).json(err);
		});
});

const port = 3300;

server.listen(port, function() {

    console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
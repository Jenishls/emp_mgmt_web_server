const config = require('../knexfile') 
const knex = require('knex')(config)


const insertEmployee = (req,res) => {
	knex('users')
	  .insert({ name: req.body.name,
	  			address: req.body.address,
	  			salary: req.body.salary,
	  			age: req.body.age
	  			})
	  .then(data => {
	  			res.json({
	  				status: "ok"
	  			})
			})
		.catch(error => {
			console.log(error);
			res.json({
				status:"error"
			})
		});
}

const getEmployee = (req,res) => {
	knex
	.select('name','address','salary','age')
	.from('employee')
	.then(data => {
		res.json({
			status: 'ok',
			data: data,
			error: false
		})
	})
	.catch(error => {
		console.log(error);
		res.json({
			status:"error"
		})
	});
}

const updateEmployee = (req,res) => {
	knex('employee')
	.where({id: req.body.empId})
	.update({
		name: req.body.name,
		address: req.body.address,
		salary: req.body.salary,
		age: req.body.age
	})
	.then(data => {
		res.json({
			status : 'ok',
			data: data,
			error: false
		})
	})
	.catch(error => {
		res.json({
			status: "error"
		})
	})
}

const deleteEmployee = (req,res) => {
    knex('employee')
    .where('id', request.body.empId)
    .del()
    .then(data => {
        response.json({
            status: "deleted"
        })

    })
    .catch(error => {
        console.log(error);
        response.json({
            status: "error"
        });
    })
}

module.exports = {
	"insertEmployee": insertEmployee,
	"getEmployee": getEmployee,
	"updateEmployee": updateEmployee,
	"deleteEmployee": deleteEmployee 
}

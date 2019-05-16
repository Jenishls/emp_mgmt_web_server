const routes = require('express').Router();
const handlers = require('../handlers/employeeHandler')

routes.post('/contacts',handlers.insertEmployee)
routes.get('/contacts',handlers.getEmployee)
routes.put('/contacts',handlers.updateEmployee)
routes.delete('/contacts',handlers.deleteEmployee)

module.exports = routes
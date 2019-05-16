const routes = require('express').Router();
const handlers = require('../handlers/employeeHandler')

routes.post('/',handlers.insertEmployee)
routes.get('/',handlers.getEmployee)
routes.put('/',handlers.updateEmployee)
routes.delete('/',handlers.deleteEmployee)

module.exports = routes
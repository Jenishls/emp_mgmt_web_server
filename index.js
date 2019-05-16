const Express = require('express')
const app = new Express()
const cors = require('cors');
const handlers = require('./handlers/employeeHandler')
const routes = require('./routes/route_employee')

app.use('/api/employee', routes);



app.listen(3000, () => {
	console.log('Server running on 3000')
})

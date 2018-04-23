require('dotenv').config()
const bodyParser = require('body-parser')
     , express = require('express')
     , app = express()
     , brain = require('./controller')
     , port = 4002
     , session = require('express-session')
     , massive = require('massive')
     
app.use(bodyParser.json());

app.post('/newUser', brain.addUser)
app.post('/login', brain.login)
app.get('/searchMessages', brain.search)

massive(process.env.CONNECTION).then(db=>{
    app.set('db', db);
    app.listen(port, ()=>{console.log(`Big Brother is listening on port ${port}`)})
})

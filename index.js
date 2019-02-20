//this is requires for importing expressjs module into aur application
const express = require('express')
//appConfig moudle functionalty van be used here
const appConfig=require('./config/appConfig')
//declaring a instance or creating an application instance
const app = express()
const port = 3000
//app.get is setting the route with address as '/' and callback passing callback function
//with express by default paramter req and res which are request and response respectively.
app.get('/', (req, res) => res.send('Hello World!'))
//listening the server-creating a local server at port 3000
app.listen(appConfig.port, () => console.log(`Example app listening on port ${port}!`))
//we can also declare function like like this and then callback in route
// //let hello=(req,res)=>{
//     res.send('hello world!')
// }
// app.get('/',hello)
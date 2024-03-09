const express = require('express' )
const app = express()
const port=3000

app.delete('/',(req, res)=>{
    res.send('got a delete request at /user')
})

app.listen(port,()=>{
    console.log(`example app listening on port ${port}`)
})
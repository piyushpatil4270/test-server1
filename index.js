import express from "express"

const app = express()

let port = 5200


app.listen(port,()=>{
    console.log(`Server started on port ${port}...`)
})
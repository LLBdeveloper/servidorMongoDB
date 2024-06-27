import express from 'express'
import pacientesRouter from "./routes/pacientes.router.js"

//Express
const app = express()
const PUERTO = 8080

//Middleware
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(express.static("./src/public"))

//Routes
app.use("/pacientes", pacientesRouter)

//Listen
app.listen(PUERTO, ()=>{
    console.log(`||| Escuchando en el puerto ${PUERTO} |||`)
})

//nos conectamos a mongoDB atlas:

//(1)importar mongose

import mongoose from "mongoose"

mongoose.connect("mongodb+srv://LLBdeveloper:admiadmi@cluster0.kdv9gnv.mongodb.net/clinica")
    .then(()=> console.log("### Base de datos Online ###"))
    .catch((error)=> console.log("%%% ERROR conectando base de datos %%% "))
import {Router} from "express"
//importamos el modelo:
import pacientesModel from "../models/pacientes.model.js"

const router = Router()

//Rutas:

//GET
router.get("/", async (req,res) => {
    try {
        const pacientes = await pacientesModel.find()
        res.send(pacientes)
    } catch(error){
        res.status(500).send("Error interno del servidor")
    }
})

//POST
router.post("/", async (req, res) =>{
    try{
        //tomamos los datos del body y creamos un nuevo documento
        const paciente = new pacientesModel(req.body)
        //lo guardamos en la base de datos
        await paciente.save()

        res.status(201).send("Paciente registrado correctamente")

    } catch(error){
        res.status(500).send("Error interno del servidor")
    }
})

//PUT
router.put("/:id", async (req, res) => {
    try {
        const paciente = await pacientesModel.findByIdAndUpdate(req.params.id, req.body)
        if(!paciente) {
            return res.status(404).send("paciente no encontrado")
        }
        res.status(200).send("Paciente modificado")
    }   catch (error) {
        res.status(500).send("Error interno del servidor")
    }
})

//DELETE
router.delete("/:id", async (req, res) => {
    try {
        const paciente = await pacientesModel.findByIdAndDelete(req.params.id)
        if(!paciente) {
            return res.status(404).send("Paciente no encontrado")
        }
        res.status(200).send("Borrado!")
    }   catch (error) {
        res.status(500).send("Error interno del servidor")
    }
})

export default router
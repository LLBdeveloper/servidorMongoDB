//1)importamos mongoose
import mongoose from 'mongoose'

//2)dejo constante con el nombre de la colleccion
const coleccion = "pacientes"

//3) definimos el esquema de los documentos: "schema"
//el objeto schema nos permite definir la forma de los documentos. Configuramos el nombre de los campos y el tipo de dato que almacenaran

const pacienteSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    edad: Number
})

//4)Definimos el "modelo"

const pacientesModel = mongoose.model(coleccion, pacienteSchema)

export default pacientesModel
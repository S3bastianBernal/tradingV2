import Acciones from "../models/Acciones.js";

const getAcciones = async (req,res)=>{
    const acciones = await Acciones.find();

    res.json(acciones)
}

const postAcciones = async (req,res)=>{
    const accion = new Acciones(req.body);
    try {
        const nuevaAccion = await accion.save();
        res.json(nuevaAccion)
    } catch (error) {
        console.log(error);
    }
    
}

const putAcciones = async (req,res)=>{
    try {
        const accion = await Acciones.findOne({_id:req.params.id});
        if (req.body.nombre) {
            accion.nombre = req.body.nombre
        }
        if (req.body.precio) {
            accion.precio = req.body.precio
        }
        if (req.body.cantidad) {
            accion.cantidad = req.body.cantidad
        }
        await accion.save();
        res.send(accion)
    } catch (error) {
        res.status(404);
        res.send({error: "No chinge Joven, ni pa programar sirves"});
    }
}

const deleteAcciones = async (req,res)=>{
    try {
        await Acciones.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Acciones no existe"});
    }
}
const patchAcciones = (req,res)=>{
    res.json({
        "message":"patch api"
    }); 
}

export{
    getAcciones,
    postAcciones,
    putAcciones,
    deleteAcciones,
    patchAcciones
}
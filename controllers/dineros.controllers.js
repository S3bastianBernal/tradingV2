import Dineros from "../models/Dineros.js";

const getDineros = async (req,res)=>{
    const dineros = await Dineros.find();

    res.json(dineros)
}

const postDineros = async (req,res)=>{
    const dinero = new Dineros(req.body);
    try {
        const nuevoDinero = await dinero.save();
        res.json(nuevoDinero)
    } catch (error) {
        console.log(error);
    }
    
}

const putDineros = async (req,res)=>{
    try {
        const dinero = await Dineros.findOne({_id:req.params.id});
        if (req.body.nombre) {
            dinero.nombre = req.body.nombre
        }
        if (req.body.precio) {
            dinero.precio = req.body.precio
        }
        if (req.body.cantidad) {
            dinero.cantidad = req.body.cantidad
        }
        await dinero.save();
        res.send(dinero)
    } catch (error) {
        res.status(404);
        res.send({error: "No chinge Joven, ni pa programar sirves"});
    }
}

const deleteDineros = async (req,res)=>{
    try {
        await Dineros.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Dineros no existe"});
    }
}
const patchDineros = (req,res)=>{
    res.json({
        "message":"patch api"
    }); 
}

export{
    getDineros,
    postDineros,
    putDineros,
    deleteDineros,
    patchDineros
}
import TipoDineros from "../models/TipoDineros.js";

const getTipos = async (req,res)=>{
    const tipos = await TipoDineros.find();

    res.json(tipos)
}

const postTipos = async (req,res)=>{
    const tipoDinero = new TipoDineros(req.body);
    try {
        const nuevoTipo = await tipoDinero.save();
        res.json(nuevoTipo)
    } catch (error) {
        console.log(error);
    }
    
}

const putTipos = async (req,res)=>{
    try {
        const tipoDinero = await TipoDineros.findOne({_id:req.params.id});
        if (req.body.nombre) {
            tipoDinero.nombre = req.body.nombre
        }
        await tipoDinero.save();
        res.send(tipoDinero)
    } catch (error) {
        res.status(404);
        res.send({error: "No chinge Joven, ni pa programar sirves"});
    }
}

const deleteTipos = async (req,res)=>{
    try {
        await TipoDineros.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "TipoDineros no existe"});
    }
}
const patchTipos = (req,res)=>{
    res.json({
        "message":"patch api"
    }); 
}

export{
    getTipos,
    postTipos,
    putTipos,
    deleteTipos,
    patchTipos
}
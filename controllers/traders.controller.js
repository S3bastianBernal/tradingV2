import Trader from "../models/Traders.js";

const getTraders = async (req,res)=>{
    const traders = await Trader.find();

    res.json(traders)
}

const postTraders = async (req,res)=>{
    const trader = new Trader(req.body);
    try {
        const nuevoTrader = await trader.save();
        res.json(nuevoTrader)
    } catch (error) {
        console.log(error);
    }
    
}

const putTraders = async (req,res)=>{
    try {
        const trader = await Trader.findOne({_id:req.params.id});
        if (req.body.nombre) {
            trader.nombre = req.body.nombre
        }
        if (req.body.edad) {
            trader.edad = req.body.edad
        }
        if (req.body.nacionalidad) {
            trader.nacionalidad = req.body.nacionalidad
        }
        if (req.body.presupuesto) {
            trader.presupuesto = req.body.presupuesto
        }
        await trader.save();
        res.send(trader)
    } catch (error) {
        res.status(404);
        res.send({error: "No chinge Joven, ni pa programar sirves"});
    }
}

const deleteTraders = async (req,res)=>{
    try {
        await Trader.deleteOne({_id:req.params.id});
        res.status(204).send();
    } catch (error) {
        res.status(404);
        res.send({error: "Trader no existe"});
    }
}
const patchTraders = (req,res)=>{
    res.json({
        "message":"patch api"
    }); 
}

export{
    getTraders,
    postTraders,
    putTraders,
    deleteTraders,
    patchTraders
}
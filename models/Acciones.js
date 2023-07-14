import mongoose from "mongoose";

const accionesSchema = mongoose.Schema({
    nombre:{
        type: String,
        require: true,
        trim: true,
    },
    precio:{
        type: Number,
        require: true,
        trim: true,
    },
    cantidad:{
        type: Number,
        require: true,
        trim: true
    }
    },
    {
        timestamps: true,
    }
);

const Acciones = mongoose.model("Acciones", accionesSchema);

export default Acciones;
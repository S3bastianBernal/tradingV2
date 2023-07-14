import mongoose from "mongoose";

const dineroSchema = mongoose.Schema({
    nombre:{
        type:String,
        require:true,
        trim: true
    },
    precio:{
        type: Number,
        require: true,
        trim: true
    },
    cantida:{
        type: Number,
        require: true,
        trim: true
    }
    },
    {
        timestamps: true,
    }
);

const Dineros = mongoose.model("Dineros", dineroSchema);

export default Dineros;
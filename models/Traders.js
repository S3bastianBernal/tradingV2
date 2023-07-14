import mongoose from "mongoose";

const traderSchema = mongoose.Schema({
    nombre:{
        type: String,
        require: true,
        trim: true,
    },
    edad:{
        type: Number,
        require: true,
        trim: true,
    },
    nacionalidad:{
        type: String,
        require: true,
        trim: true,
    },
    presupuesto:{
        type: Number,
        require: true,
        trim: true
    }
    },
    {
        timestamps: true,
    }
);

const Trader = mongoose.model("Trader", traderSchema);

export default Trader;
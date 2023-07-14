const TipoDineroSchema = mongoose.Schema({
    nombre:{
        type:String,
        require:true,
        trim: true
    }
    },
    {
        timestamps: true,
    }
);

const TipoDineros = mongoose.model("TipoDineros", TipoDineroSchema);

export default TipoDineros;
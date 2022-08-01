const mongoose = require("mongoose")

const ListSchema = new mongoose.Schema({
    title: { type:String, required: true, unique: true },
    type: {type:String},
   content:{type:Array},
    genre: { type: String },
    isSeries: { type: Boolean, default: false },
  
    
}, { timestamps: true }
)

module.export = mongoose.model("list", ListSchema)

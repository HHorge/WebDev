const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Creating mongoose schema
const AlbumSchema = new Schema(
    {
        _id: Schema.Types.ObjectId,
        Number: String,
        Year: String,
        Album: String,
        Artist: String,
        Genre: String,
        Subgenre: String,
        Rating: Array

    },
    { collection: "albums" }
    );
    
    //Compile model from schema
    
const Album = mongoose.model("Album", AlbumSchema, "albums");
module.exports = Album;

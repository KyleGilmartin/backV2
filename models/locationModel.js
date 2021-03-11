import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';



const Schema = mongoose.Schema;


const LocationSchema = new Schema({
        // title: { type: String, required: true },
        // starRating: { type: Number, min: 0, max: 5 },
        // summary: { type: String, required: true },
        // keywords: [String],
        // isbn: { type: String, required: true, index: { unique: true } },
        id: { type: String, required: true, index: { unique: true } },
        name: { type: String, required: true },
        lon: { type: String, required: true },
        lat: { type: String, required: true },
        description: { type: String, required: true }




    }, { toJSON: { virtuals: true } }) // include virtuals when document is converted to JSON


// this creates a get property uri which can be used but does not
// get stpred om the database

LocationSchema.virtual('uri').get(function() {
    return `/Locations/${this._id}`;
});

LocationSchema.plugin(uniqueValidator);

let Location = mongoose.model('Location', LocationSchema);


export { Location };
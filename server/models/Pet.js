const { Schema, model } = require('mongoose');


const petSchema = new Schema ({
    petName: {
        type: String,
        required: true,
        trim: true
    },
    type:{
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 0,
        max: 13,
        default: 0
    },
    isClean: {
        type: Boolean,
        required: true
    },
    playedWith: {
        type: Boolean,
        required: true
    },
    hunger:{
        type: Number,
        min: 0,
        max: 100,
        default: 0
    },
    petOwner: {
        type: String,
        required: true,
        trim: true,
      },
});

const Pet = model('Pet', petSchema);

module.exports = Pet;

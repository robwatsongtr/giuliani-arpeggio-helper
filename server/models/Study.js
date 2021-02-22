// Giuliani Study Schema

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GiulianiStudySchema = new Schema({
    studyPath: {
      type: String,
      required: true
    },
    difficultyRob: {
      type: Number,
      required: true
    },
    difficultyTennant: {
      type: Number,
    }
});


// The first argument is the singular name of the collection your model is for. 
module.exports = Item = mongoose.model('GiulianiStudy', GiulianiStudySchema);
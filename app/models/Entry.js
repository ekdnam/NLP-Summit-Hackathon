//
// Visit number
// Patient name
// Date
// transcription

const mongoose = require('mongoose');

const EntrySchema = new mongoose.Schema({
    VisitNumber:{
        type: BigInt,
        required: true
    },
    PatientName:{
        type: String,
        required: true
    },
    Date:{
        type: Date,
        default: Date.now
    },
    transcription:{
        type: String,
        required: true
    }
})

const PatientEntry = mongoose.model('PatientEntry', EntrySchema);

module.exports = PatientEntry;
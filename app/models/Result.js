// Visit Number
// Patient name
// Date
// Medical specialty

const mongoose  = require("mongoose");

const ResultSchema = new mongoose.Schema({
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
        default: Date.now,
    },
    MedicalSpecialty:{
        type: String,
        required: true
    }
});

const Result = mongoose.model('Result', ResultSchema);

module.exports = Result;
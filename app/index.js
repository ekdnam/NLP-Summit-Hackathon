// file read write
const fs = require('fs');
// get mongoose
const mongoose = require('mongoose');
// get node express module. install it by npm i express
const express = require('express');
// simplifies accepting responses and sending requests to the client. install it by npm i cors
const cors = require('cors');
// for ejs templating
const expressLayouts = require('express-ejs-layouts');
// parse output
const bodyParser = require('body-parser');
// get db config
const db = require('./config/keys').mongoURI;
// get cwd
const path = require('path');
// Port where app is running
const PORT = process.env.PORT || 5000;
// create express application
const app = express();
// ejs
app.use(expressLayouts);
// view engine for ejs
app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.render('index');
});

function isValidData(data) {
    return data.name && data.name.toString().trim() !== '' && data.content && data.content.toString().trim() !== '';
}

// app.use(limiter);

app.post('/getDiagnosis', (req, res) => {
    var name = req.body.name;
    var description = req.body.content;
    const Data = {
        name,
        description
    }
    fs.writeFile ("transcript.json", JSON.stringify(Data), function(err) {
        if (err) throw err;
        console.log('complete');
        });
    console.log(Data);
    desc = name;
    medicalSpecialty = description;
    var result = [{
        desc: "THE DISEASE IS ****",
        medicalSpecialty: "THE MEDICAL SPECIALTY IS ****" 
    }];
    res.render('getDiagnosis.ejs',{
        desc,
        medicalSpecialty
    });
});
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});


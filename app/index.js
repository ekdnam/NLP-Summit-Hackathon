// get node express module. install it by npm i express
const express = require('express');
// simplifies accepting responses and sending requests to the client. install it by npm i cors
const cors = require('cors');

const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

const path = require('path');

const PORT = process.env.PORT || 5000;
// create express application
const app = express();
app.use(expressLayouts);
app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'public'));
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(__dirname + '/views'));
// app.set('views', __dirname + '/views');
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

app.use(cors());
app.use(express.json());
// app.use(express.static(__dirname + '/views'));

app.get("/", (req, res) => {
    res.render('index');
});

app.get('/getDiagnosis', (req, res) => {
    console.log(req.body);
    // console.log("HIII!");
    res.json({
        message: "Meow!"
    });
});

function isValidData(data) {
    return data.name && data.name.toString().trim() !== '' && data.content && data.content.toString().trim() !== '';
}

// app.use(limiter);

app.post('/getDiagnosis', (req, res) => {
    var name = req.body.name;
    var description = req.body.content;
    // console.log("HIII!");
    const Data = {
        name,
        description
    }
    console.log(Data);
    // res.json({
    //     User: name,
    //     description: description 
    // });
    res.render('getDiagnosis.ejs');
});
app.listen(PORT, () => {
    console.log(`Server started on ${PORT}`);
});
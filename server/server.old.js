let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');
let database = require('./database/db');
let env = require('./local-environment.mjs')


const eventRoute = require('./routes/event.routes');
const eventSchema = require('./models/event-schema');

mongoose.Promise = global.Promise;
mongoose.connect(database.db, {
    useNewUrlParser: true
}).then(() => {
    console.log('Database connected sucessfully !')
},
error => {
    console.log('Database could not be connected : ' + error)
}
)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use('/events', eventSchema);

app.get("/events", (req, res) => {
    res.json({events: [
        {
            name: "Singer & Songwriter Night",
            date: "Tuesdays",
            time: "9:00PM",
            description: "Here is some information aboiut what will be going on at the event"

        },
        {
            name: "Karaoke Night",
            date: "Mondays",
            time: "9:00PM",
            description: "Here is some information aboiut what will be going on at the event"

        },
        {
            name: "Trivia Night",
            date: "Thursdays",
            time: "9:00PM",
            description: "Here is some information aboiut what will be going on at the event"

        }
    ]})
})

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log('Connected to port ' + port)
})

// Error Handling
app.use((req, res, next) => {
    next(createError(404));
});

app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});

// //Express basic setup
// const express = require('express');
// const mongoose = require("mongoose");

// const app = express();
// // mongoose.connect("mongodb+srv://Ethancantrell67:vnQpyMKQlrYY991n@lot-6-site.xuass1j.mongodb.net/lot-6-data?retryWrites=true&w=majority")

// const EventSchema = new mongoose.Schema({
//    imagePath: String,
//    name: String,
//    date: String,
//    time: String,
//    description: String 
// });

// const EventModel = mongoose.model("events", EventSchema);


// //GET Requests
// app.get("/getevents", async (req, res) => {
//     await EventModel.find().then(function(events) {
//         res.json(events)
//     }).catch(function(err) {
//         console.log(err);
//     })
// });

// app.get("/tests", (req, res) => {
//     res.json({tests: ["testOne", "testTwo", "testThree", "testYourMom"]})
// });

// const PORT = 5000;
// app.listen(PORT, () => {console.log("server listening on port " + PORT)});
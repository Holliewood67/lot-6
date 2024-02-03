const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let EventSchema = new Schema({
    eventName: {
        type: String
    },
    eventDate: {
        type: String
    },
    eventTime: {
        type: String
    },
    eventDescription: {
        type: String
    },
    eventImage: {
        type: String
    },
})
    module.exports = mongoose.model('Event', EventSchema);    
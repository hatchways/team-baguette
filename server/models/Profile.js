const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const profileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    availability: [{
        date: {
            type: Date
        },
        from: {
            type: String
        },
        to:{
            type: String
        }
    }]
});

module.exports = Profile = mongoose.model('profile', profileSchema);
const mongoose = require('mongoose');

const mgmSchema = new mongoose.Schema({
    mgmData: {
        type: String,
        required: true,
    },
    count: {
        type: Number,
        default: 0, // Inizializza il count a 0
    },
    isValid: {
        type: Boolean,
        default: true, // Inizializza isValid a true
    },
})

module.exports = mongoose.model("mgmData", mgmSchema);
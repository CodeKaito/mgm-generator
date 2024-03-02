const mongoose = require('mongoose');

const mgmSchema = new mongoose.Schema({
    mgmData: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model("mgmData", mgmSchema);
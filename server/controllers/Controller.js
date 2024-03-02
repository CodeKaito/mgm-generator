const MGMDataModel = require("../models/Model");

module.exports.getMGMData = async (req, res) => {
    const mgmData = await MGMDataModel.find();
    res.send(mgmData);

    // res.send("Hello, world!");
}

module.exports.saveMGMData = (req, res) => {
    const { mgmData } = req.body;

    MGMDataModel.create({mgmData})
        .then((data) => {
            console.log("Saved successfully");
            res.status(201).send(data);
        })
        .catch((error) => {
            console.log(error.message);
            res.send({error: error.message, msg: "Something went wrong!"});
        });
}
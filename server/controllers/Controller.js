const MGMDataModel = require("../models/Model");

module.exports.getMGMData = async (req, res) => {
    try {
        // Esegui la logica della tua richiesta di fetch qui
        const mgmData = await MGMDataModel.find();

        // Incrementa il count e gestisci isValid per l'oggetto specifico fetchato
        for (const mgmObject of mgmData) {
            const { objectId, count } = mgmObject; // Assumi che nel frontend ci sia un identificativo univoco chiamato "objectId"

            if (count === 5) {
                mgmObject.isValid = false;
            } else {
                // Verifica se l'oggetto è stato fetchato nel frontend
                if (req.body.fetchedObjects.includes(objectId)) {
                    mgmObject.count++;
                }
            }
            await mgmObject.save(); // Salva le modifiche nel database
        }

        res.send(mgmData);
    } catch (error) {
        console.error('Errore nella richiesta di fetch:', error.message);
        res.status(500).json({ error: 'Something went wrong!' });
    }
}

module.exports.saveMGMData = (req, res) => {
    const { mgmData } = req.body;

    MGMDataModel.create({ mgmData })
        .then((data) => {
            console.log("Saved successfully");
            res.status(201).send(data);
        })
        .catch((error) => {
            console.log(error.message);
            res.status(500).send({ error: error.message, msg: "Something went wrong!" });
        });
}

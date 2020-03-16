var Records = require('../models/Record')

exports.getRecords = (req, res, next) => {
  // Schreib hier code um alle records aus der records-Collection zu holen
  var records = await Records.find()
  res.status(200).send(records);
};

exports.getRecord = (req, res, next) => {
  const { id } = req.params;
  // Schreib hier code um das record mit der id aus params aus der records-Collection zu holen
  var record = await Records.findById(id)
  res.status(200).send(record);
};

exports.deleteRecord = (req, res, next) => {
  const { id } = req.params;
  // Schreib hier code um das record mit der id aus params aus der records-Collection zu löschen
  var record = await Records.findByIdAndDelete(id)
  res.status(200).send(record);
};

exports.updateRecord = (req, res, next) => {
  const { id } = req.params;
  const dt = req.body;
  // Schreib hier code um das record mit der id aus params in der records-Collection mit den Daten aus req.body zu aktualisieren
  var record = await Records.findByIdAndUpdate(id, dt, {new: true})
  res.status(200).send(record);
};

exports.addRecord = (req, res, next) => {
  const data = req.body;
  // Schreib hier code um die Daten des neuen record aus req.body in der records-Collection zu speichern
  var record = new Records(data)
  await record.save()
  res.status(200).send(record);
};


const eventController = require("./events.controller");

const postNewEvent = (req, res) => {
  const eventObj = req.body;
  eventController
    .createEvent(eventObj)
    .then((data) => {
      res.status(201).json(data);
    })
    .catch((e) => {
      res.status(404).json({ message: "Error al crear event.", e });
    });
};

const updateEvent = (req, res) => {
  const id = req.params.id;
  const eventObj = req.body;

  eventController
    .updateEvent(id, eventObj)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "Invalid ID" });
      }
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: "Bad request", err });
    });
};

const deleteEvent = (req, res) => {
  const id = req.params.id;
  eventController
    .deleteEvent(id)
    .then((data) => {
      if (!data) {
        return res.status(404).json({ message: "Invalid ID" });
      }
      res.status(204).json();
    })
    .catch((err) => {
      res.status(400).json({ message: "Bad request", err });
    });
};

const getAllEvents = (req, res) =>
  eventController
    .getEvents()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: "Bad request", err });
    });

module.exports = { deleteEvent, updateEvent, postNewEvent, getAllEvents };

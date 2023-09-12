const Events = require("../models/events.model");

const createEvent = async (eventObj) => {
  const newEvent = await Events.create({
    nameEvent: eventObj.nameEvent,
    dateInit: eventObj.dateInit,
    dateFinish: eventObj.dateFinish,
    descriptionEvent: eventObj.descriptionEvent,
    imgEvent: eventObj.imgEvent,
  });
  return newEvent;
};

const updateEvent = async (id, eventObj) => {
  const selectedEvent = await Events.findOne({
    where: { id: id },
  });
  if (!selectedEvent) return null;
  const eventModificated = await selectedEvent.update(eventObj);
  return eventModificated;
};

const deleteEvent = async (id) => {
  const event = await Events.destroy({
    where: { id: id },
  });
  return event;
};

const getEvents = async () => {
  const events = await Events.findAll({});
  return events;
};

module.exports = { deleteEvent, updateEvent, createEvent, getEvents };

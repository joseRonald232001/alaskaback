const router = require("express").Router();

const eventsServices = require("./events.services");
router
  .route("/events")
  .get(eventsServices.getAllEvents)
  .post(eventsServices.postNewEvent);
router
  .route("/events/:id")
  .put(eventsServices.updateEvent)
  .delete(eventsServices.deleteEvent);

module.exports = router;

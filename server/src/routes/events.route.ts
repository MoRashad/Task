import express from "express";
import { EventsService } from "../service/events.service";
import { EventsController } from "../controller/events.controller";
import { tryCatch } from "../utils";

const router = express.Router();
const eventsController = new EventsController(new EventsService());

router.post("/", tryCatch(eventsController.createEvent));

router.get("/", tryCatch(eventsController.getEvents));

export default router;

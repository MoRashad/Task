import express from "express";
import { EventsController } from "../controller/events.controller";
import { tryCatch } from "../utils";
import { validateRequest } from "../middleware";
import { createEventSchema } from "../schema";

const router = express.Router();
const eventsController = new EventsController();

router.post("/", validateRequest(createEventSchema), tryCatch(eventsController.createEvent));

router.get("/", tryCatch(eventsController.getEvents));

router.get("/export", tryCatch(eventsController.exportEventsToCsv));

export default router;

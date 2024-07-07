import { Request, Response } from "express";
import { EventsService } from "../service/events.service";

export class EventsController {
	private eventsService: EventsService;
	constructor(eventService: EventsService) {
		this.eventsService = eventService;
	}
	public async createEvent(req: Request, res: Response) {
		res.status(201).json({ message: "Event created" });
	}

	public async getEvents(req: Request, res: Response) {
		res.status(200).json({ message: "Events retrieved" });
	}
}

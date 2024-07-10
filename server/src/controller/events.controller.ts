import { Request, Response } from "express";
import * as utils from "../utils";
import { EventBody, EventsQueryParams } from "../types/types";
import { CustomError } from "../error";
import { Event, Prisma } from "@prisma/client";
import { createEvent, getEvents, getEventsCount, getPaginatedEvents } from "../service/events.service";
export class EventsController {
	public async createEvent(req: Request, res: Response) {
		const requestBody: EventBody = req.body;
		const actorDetails = utils.getActor(requestBody.actor_id);
		const targetDetails = utils.getActor(requestBody.trget_id);
		const getEventDetails = utils.getAction(requestBody.action_id);
		if (!actorDetails || !targetDetails || !getEventDetails) {
			throw new CustomError({
				message: "Invalid data",
				code: 400,
				status: "error",
			});
		}
		const data: Prisma.EventCreateInput = {
			id: utils.generateUniqueId(),
			action_id: getEventDetails.id,
			action_name: getEventDetails.name,
			actor_id: actorDetails.actor_id,
			actor_email: actorDetails.email,
			actor_name: actorDetails.name,
			group: actorDetails.group,
			object: "event",
			metadata: requestBody.metaData,
			location: req.socket.remoteAddress,
			occurred_at: new Date(requestBody.date),
			target_id: targetDetails.actor_id,
			target_name: targetDetails.name,
		};
		console.log("🚀 ~ EventsController ~ createEvent ~ data:", data);
		const event = await createEvent(data);
		console.log("🚀 ~ EventsController ~ createEvent ~ event:", event);
		res.status(201).json({ message: "Event created", data });
	}

	public async getEvents(req: Request, res: Response) {
		const query: EventsQueryParams = req.query;
		const page = query.page ? Number(query.page) : 1;
		const limit = query.limit ? Number(query.limit) : 10;
		const search = query.search || "";
		const totalEvents = await getEventsCount(search);
		const events = await getPaginatedEvents({ page, pageSize: limit, search });
		const totalPage = Math.ceil(totalEvents / limit);
		const lastPage = totalPage === 0 ? 1 : totalPage;
		const isLastPage = page === lastPage;
		const result: {
			events: Event[];
			totalEvents: number;
			totalPage: number;
			page: number;
			lastPage: number;
			isLastPage: boolean;
			limit: number;
		} = {
			totalEvents,
			totalPage,
			page,
			lastPage,
			isLastPage,
			limit,
			events: events,
		};

		res.status(200).json(result);
	}

	public async exportEventsToCsv(req: Request, res: Response) {
		const query: EventsQueryParams = req.query;
		const search = query.search || "";
		const events = await getEvents(search);
		const parsedEvents = await utils.parseJsonToCsv(events);
		res.attachment("activites.csv");
		res.send(parsedEvents);
	}
}

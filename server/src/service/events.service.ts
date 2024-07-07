import prisma from "../config/prisma.config";

export class EventsService {
	private primsaClient = prisma;
	async createEvent() {
		try {
			return "Event created";
		} catch (error) {
			return error;
		}
	}
	async getEvents() {
		try {
			return "Events retrieved";
		} catch (error) {
			return error;
		}
	}
}

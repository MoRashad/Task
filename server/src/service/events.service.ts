import { Prisma } from "@prisma/client";
import prisma from "../config/prisma.config";
import { prismaErrorMapping } from "../utils";

// export class EventsService {
// 	private primsaClient = prisma;
export async function createEvent(data: Prisma.EventCreateInput) {
	try {
		return await prisma.event.create({
			data,
		});
	} catch (error) {
		throw prismaErrorMapping(error);
	}
}
export async function getEvents(search: string) {
	try {
		return await prisma.event.findMany({
			where:
				search.length > 1
					? {
							OR: [
								{
									actor_email: {
										contains: search,
									},
								},
								{
									actor_name: {
										contains: search,
									},
								},
								{
									target_name: {
										contains: search,
									},
								},
								{
									action_name: {
										contains: search,
									},
								},
							],
					  }
					: {},
		});
	} catch (error) {
		throw prismaErrorMapping(error);
	}
}

// get paginated events
export async function getPaginatedEvents({ page, pageSize, search }: { page: number; pageSize: number; search: string }) {
	try {
		const events = await prisma.event.findMany({
			skip: (page - 1) * pageSize,
			take: pageSize,
			where:
				search.length > 1
					? {
							OR: [
								{
									actor_email: {
										contains: search,
									},
								},
								{
									actor_name: {
										contains: search,
									},
								},
								{
									target_name: {
										contains: search,
									},
								},
								{
									action_name: {
										contains: search,
									},
								},
							],
					  }
					: {},
		});
		return events;
	} catch (error) {
		throw prismaErrorMapping(error);
	}
}

export async function getEventsCount(search: string) {
	try {
		return await prisma.event.count({
			where:
				search.length > 1
					? {
							OR: [
								{
									actor_email: {
										contains: search,
									},
								},
								{
									actor_name: {
										contains: search,
									},
								},
								{
									target_name: {
										contains: search,
									},
								},
								{
									action_name: {
										contains: search,
									},
								},
							],
					  }
					: {},
		});
	} catch (error) {
		throw prismaErrorMapping(error);
	}
}

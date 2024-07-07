import * as yup from "yup";
import { EventBody } from "../types/types";

const eventSchema: yup.ObjectSchema<EventBody> = yup
	.object({
		actor_id: yup.string().required(),
		action_id: yup.string().required(),
		trget_id: yup.string().required(),
		date: yup.string().required(),
		metaData: yup.object().optional(),
	})
	.unknown(true)
	.strict(true);
export const createEventSchema = yup.object({
	body: eventSchema,
});

const querySchema = yup.object({
	page: yup.number().required(),
	limit: yup.number().required(),
	search: yup.string().optional(),
});

export const getEventsSchema = yup.object({
	query: querySchema,
});

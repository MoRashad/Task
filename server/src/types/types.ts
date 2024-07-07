export type EventBody = {
	actor_id: string;
	action_id: string;
	trget_id: string;
	date: string;
	metaData?: any;
};

export type EventsQueryParams = {
	page?: number;
	limit?: number;
	search?: string;
};

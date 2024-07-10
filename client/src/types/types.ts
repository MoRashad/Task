export interface GetEventsResponse {
	totalEvents: number;
	totalPage: number;
	page: number;
	lastPage: number;
	isLastPage: boolean;
	limit: number;
	events: Event[];
}

export interface Event {
	id: string;
	object: string;
	actor_id: string;
	actor_name: string;
	actor_email: string;
	group: string;
	action_id: string;
	action_name: string;
	target_id: string;
	target_name: string;
	location: string;
	occurred_at: string;
	metadata: unknown;
	created_at: string;
}

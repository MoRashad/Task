export const getActor = (id: string) => {
	const actor = [
		{
			actor_id: "user_1",
			name: "John Doe",
			group: "instatus.com",
			email: "john@instatus.com",
		},
		{
			actor_id: "user_2",
			name: "Jane Doe",
			group: "instatus.com",
			email: "jane@instatus.com",
		},
		{
			actor_id: "user_3",
			name: "John Smith",
			group: "instatus.com",
			email: "smith@instatus.com",
		},
		{
			actor_id: "user_4",
			name: "Jane Smith",
			group: "instatus.com",
			email: "jane@instatus.com",
		},
		{
			actor_id: "user_5",
			name: "John Doe",
			group: "instatus.com",
			email: "test@instatus.com",
		},
	];

	return actor.find((a) => a.actor_id === id);
};

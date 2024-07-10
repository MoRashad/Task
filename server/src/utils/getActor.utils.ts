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
		{
			actor_id: "user_5",
			name: "Ahmed mohsen",
			group: "instatus.com",
			email: "ahmed@instatus.com",
		},
		{
			actor_id: "user_6",
			name: "mohamed Doe",
			group: "instatus.com",
			email: "mohamed@instatus.com",
		},
		{
			actor_id: "user_7",
			name: "sherif Doe",
			group: "instatus.com",
			email: "sherif@instatus.com",
		},
		{
			actor_id: "user_8",
			name: "ramzy hassan",
			group: "instatus.com",
			email: "ramzy@instatus.com",
		},
		{
			actor_id: "user_9",
			name: "mostafa hassan",
			group: "instatus.com",
			email: "mostafa@instatus.com",
		},
	];

	return actor.find((a) => a.actor_id === id);
};

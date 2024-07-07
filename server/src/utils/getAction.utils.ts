export const getAction = (id: string) => {
	const action = [
		{
			id: "evt_action_1",
			name: "user.login_succeeded",
		},
		{
			id: "evt_action_2",
			name: "user.login_failed",
		},
		{
			id: "evt_action_3",
			name: "user.logout",
		},
		{
			id: "evt_action_4",
			name: "user.account_created",
		},
		{
			id: "evt_action_5",
			name: "user.account_deleted",
		},
		{
			id: "evt_action_6",
			name: "user.account_updated",
		},
	];

	return action.find((a) => a.id === id);
};

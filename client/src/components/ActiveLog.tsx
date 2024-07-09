import React, { useState } from "react";
import ExportImage from "../assests/ExportImage";

interface Activity {
	id: string;
	actor: {
		name: string;
		email: string;
		id: string;
	};
	action: {
		name: string;
		object: string;
		id: string;
	};
	date: {
		readable: string;
		timestamp: string;
	};
	metadata: string;
	target: string;
}

const ActivityLog: React.FC = () => {
	const [activities] = useState<Activity[]>([
		{
			id: "1",
			actor: { name: "Ali", email: "ali@instatus.com", id: "user_123" },
			action: { name: "user.searched_activity_log_events", object: "event_action", id: "evt_456" },
			date: { readable: "Aug 7, 5:38 PM", timestamp: "2023-08-07T17:38:00Z" },
			metadata: "Some metadata",
			target: "Some target",
		},
		{
			id: "2",
			actor: { name: "Ali", email: "ali@instatus.com", id: "user_123" },
			action: { name: "user.login_succeeded", object: "event_action", id: "evt_457" },
			date: { readable: "Aug 7, 4:48 PM", timestamp: "2023-08-07T16:48:00Z" },
			metadata: "Some metadata",
			target: "Some target",
		},
		{
			id: "3",
			actor: { name: "Baraa Ahmed", email: "baraa@instatus.com", id: "user_D0KVD1U3L030" },
			action: { name: "incident.create_succeeded", object: "event_action", id: "evt_action_PGTD81NCAOQ2" },
			date: { readable: "Aug 7, 4:48 PM", timestamp: "2023-08-07T16:48:00Z" },
			metadata: "Some metadata",
			target: "Some target",
		},
		{
			id: "4",
			actor: { name: "Omar", email: "omar@instatus.com", id: "user_125" },
			action: { name: "user.invited_teammate", object: "event_action", id: "evt_459" },
			date: { readable: "Aug 7, 2:22 PM", timestamp: "2023-08-07T14:22:00Z" },
			metadata: "Some metadata",
			target: "Some target",
		},
		{
			id: "5",
			actor: { name: "Omar", email: "omar@instatus.com", id: "user_125" },
			action: { name: "user.invited_teammate", object: "event_action", id: "evt_459" },
			date: { readable: "Aug 7, 2:22 PM", timestamp: "2023-08-07T14:22:00Z" },
			metadata: "Some metadata",
			target: "Some target",
		},
		{
			id: "6",
			actor: { name: "Omar", email: "omar@instatus.com", id: "user_125" },
			action: { name: "user.invited_teammate", object: "event_action", id: "evt_459" },
			date: { readable: "Aug 7, 2:22 PM", timestamp: "2023-08-07T14:22:00Z" },
			metadata: "Some metadata",
			target: "Some target",
		},
		{
			id: "7",
			actor: { name: "Omar", email: "omar@instatus.com", id: "user_125" },
			action: { name: "user.invited_teammate", object: "event_action", id: "evt_459" },
			date: { readable: "Aug 7, 2:22 PM", timestamp: "2023-08-07T14:22:00Z" },
			metadata: "Some metadata",
			target: "Some target",
		},
		{
			id: "8",
			actor: { name: "Omar", email: "omar@instatus.com", id: "user_125" },
			action: { name: "user.invited_teammate", object: "event_action", id: "evt_459" },
			date: { readable: "Aug 7, 2:22 PM", timestamp: "2023-08-07T14:22:00Z" },
			metadata: "Some metadata",
			target: "Some target",
		},
	]);

	const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null);

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log("Search term:", event.target.value);
	};

	const handleExport = () => {
		console.log("Export clicked");
	};

	const handleLoadMore = () => {
		console.log("Load more clicked");
	};

	const getInitials = (name: string) => {
		return name
			.split(" ")
			.map((n) => n[0])
			.join("")
			.toUpperCase();
	};

	const getColor = (email: string) => {
		const colors = [
			"bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500",
			"bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%",
			"bg-gradient-to-r from-violet-200 to-pink-2000",
			"bg-gradient-to-r from-teal-400 to-yellow-200",
			"bg-gradient-to-r from-fuchsia-500 to-pink-500",
			"bg-gradient-to-r from-pink-500 to-rose-500",
		];
		return colors[email.length % colors.length];
	};

	return (
		<div className="max-w-6xl mx-auto bg-gray-100 rounded-lg shadow-lg mt-24">
			<div className="mb-4 flex p-6 items-center justify-between">
				<input
					type="text"
					placeholder="Search name, email or action..."
					className="w-11/12 p-3 border bg-transparent rounded-l-lg focus:outline-none focus:ring-2 focus:ring-gray-100 transition-colors"
					onChange={handleSearch}
				/>
				<div className="flex flex-row justify-center items-center w-1/12 px-3 py-3 bg-gray-100 border rounded-r-lg hover:bg-slate-200 hover:transition-colors">
					<div className="w-8 mr-2">
						<ExportImage />
					</div>
					<button onClick={handleExport}>EXPORT</button>
				</div>
			</div>
			<table className="w-full bg-white rounded-lg overflow-hidden">
				<thead className="bg-gray-100">
					<tr className="text-left text-gray-500">
						<th className="p-3">ACTOR</th>
						<th className="p-3">ACTION</th>
						<th className="p-3">DATE</th>
					</tr>
				</thead>
				<tbody>
					{activities.map((activity) => (
						<React.Fragment key={activity.id}>
							<tr
								className="border-t cursor-pointer hover:bg-gray-50 "
								onClick={() => setSelectedActivity((prevState) => (prevState === activity ? null : activity))}
								// onMouseEnter={() => setSelectedActivity(activity)}
								// onMouseLeave={() => setSelectedActivity(null)}
							>
								<td className="p-3 flex items-center">
									<span
										className={`w-8 h-8 rounded-full ${getColor(
											activity.actor.email
										)} flex items-center justify-center text-white mr-2`}
									>
										{getInitials(activity.actor.name)}
									</span>
									{activity.actor.email}
								</td>
								<td className="p-3">{activity.action.name}</td>
								<td className="p-3 text-gray-500">{activity.date.readable}</td>
								{selectedActivity && selectedActivity.id === activity.id && (
									<td colSpan={3}>
										<div
											className={`p-4  border-t border-b absolute box-border w-128 h-72  bg-gray-50 rounded-lg border md:scale-100 lg:scale-105`}
										>
											<div className="grid grid-cols-3 gap-1">
												<div>
													<h3 className="font-bold mb-2">ACTOR</h3>
													<p>Name: {selectedActivity.actor.name}</p>
													<p>Email: {selectedActivity.actor.email}</p>
													<p>ID: {selectedActivity.actor.id}</p>
												</div>
												<div>
													<h3 className="font-bold mb-2">ACTION</h3>
													<p>Name: {selectedActivity.action.name}</p>
													<p>Object: {selectedActivity.action.object}</p>
													<p>ID: {selectedActivity.action.id}</p>
												</div>
												<div className="mt-4">
													<h3 className="font-bold mb-2">DATE</h3>
													<p>Readable: {selectedActivity.date.readable}</p>
												</div>
												<div className="mt-4">
													<h3 className="font-bold mb-2">METADATA</h3>
													<p>{selectedActivity.metadata}</p>
												</div>
												<div className="mt-4">
													<h3 className="font-bold mb-2">TARGET</h3>
													<p>{selectedActivity.target}</p>
												</div>
											</div>
										</div>
									</td>
								)}
							</tr>
						</React.Fragment>
					))}
				</tbody>
			</table>
			<button
				className="w-full mt-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
				onClick={handleLoadMore}
			>
				LOAD MORE
			</button>
		</div>
	);
};

export default ActivityLog;

import React, { useEffect, useRef, useState } from "react";
import ExportImage from "../assests/ExportImage";
import ActivitySkeleton from "./ActivitySkeleton";
import { useInfiniteQuery } from "react-query";
import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { GetEventsResponse, Event } from "../types/types";

const ActivityLog: React.FC = () => {
	const limit = 10;
	const [selectedActivity, setSelectedActivity] = useState<Event | null>(null);
	const [searchInput, setSerachInput] = useState<string>("");
	const [isPopupVisible, setIsPopupVisible] = useState(false);
	const popupRef = useRef<HTMLDivElement>(null);
	console.log(import.meta.env.VITE_API_BASE_URL);
	const { data, fetchNextPage, isFetchingNextPage, refetch } = useInfiniteQuery(
		["activties"],
		async ({ pageParam = 1 }) => {
			const requestOptions: AxiosRequestConfig = {
				url: `${import.meta.env.VITE_API_BASE_URL}/events?page=${pageParam}&limit=${limit}&search=${searchInput}`,
				headers: {
					"Content-Type": "application/json",
				},
				method: "GET",
			};

			const response: AxiosResponse<unknown, unknown> = await axios.request(requestOptions);
			console.log("🚀 ~ response:", response.data);
			return response.data as GetEventsResponse;
		},
		{
			getNextPageParam: (_, pages) => {
				return pages.length + 1;
			},
			initialData: {
				pages: [],
				pageParams: [1],
			},
		}
	);

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		console.log("Search term:", event.target.value);
		setSerachInput(event.target.value);
		refetch();
	};

	const handleExport = () => {
		console.log("Export clicked");
	};

	// const handleLoadMore = () => {
	// 	console.log("Load more clicked");
	// };

	const getInitials = (name: string) => {
		return name
			.split(" ")
			.map((n) => n[0])
			.join("")
			.toUpperCase();
	};

	function formatDate(date: string) {
		// const options = { year: "numeric", month: "long", day: "numeric" };
		return `${new Date(date).toDateString()}  ${new Date(date).toLocaleTimeString()}`;
	}

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

	useEffect(() => {
		if (isPopupVisible && popupRef.current) {
			popupRef.current.focus();
		}
	}, [isPopupVisible]);

	return (
		<div className="max-w-6xl mx-auto bg-gray-100 rounded-lg shadow-lg my-24 font-inter">
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
					<button onClick={handleExport} className="text-sm text-gray-500">
						EXPORT
					</button>
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
					{data &&
						data.pages.map((page, index) => (
							<React.Fragment key={index}>
								{page.events &&
									page.events.map((activity: Event) => {
										return (
											<React.Fragment key={activity.id}>
												<tr
													className="border-t cursor-pointer hover:bg-gray-50"
													onClick={() => {
														setSelectedActivity((prevState) => {
															if (prevState === activity) {
																setIsPopupVisible(false);
																setTimeout(() => setSelectedActivity(null), 300);
																return prevState;
															} else {
																setIsPopupVisible(true);
																return activity;
															}
														});
													}}
												>
													<td className="p-3 flex items-center">
														<span
															className={`w-8 h-8 rounded-full ${getColor(
																activity.actor_email
															)} flex items-center justify-center text-white mr-2`}
														>
															{getInitials(activity.actor_email)}
														</span>
														{activity.actor_email}
													</td>
													<td className="p-3">{activity.action_name}</td>
													<td className="p-3 text-gray-500">{formatDate(activity.occurred_at)}</td>
												</tr>
												{selectedActivity && selectedActivity.id === activity.id && (
													<tr>
														<td colSpan={3}>
															<div
																className={`absolute transition-all duration-300 ease-in-out ${
																	isPopupVisible
																		? "opacity-100 scale-105"
																		: "opacity-0 scale-95"
																}`}
															>
																<div className="p-4 border-t border-b absolute box-border w-[68.5rem] h-72 bg-gray-50 rounded-lg border md:scale-100 lg:scale-105 ">
																	<div className="grid grid-cols-3 gap-1">
																		<div>
																			<h3 className="font-medium text-gray-500  mb-2">
																				ACTOR
																			</h3>
																			<p>
																				<span className="text-gray-500 mr-12 ">Name</span>{" "}
																				{selectedActivity.actor_name}
																			</p>
																			<p>
																				<span className="text-gray-500 mr-14">Email</span>
																				{selectedActivity.actor_email}
																			</p>
																			<p>
																				<span className="text-gray-500 mr-[4.5rem]">
																					ID
																				</span>{" "}
																				{selectedActivity.actor_id}
																			</p>
																		</div>
																		<div>
																			<h3 className="font-medium text-gray-500 mb-2">
																				ACTION
																			</h3>
																			<p>
																				<span className="text-gray-500 mr-12">Name</span>{" "}
																				{selectedActivity.action_name}
																			</p>
																			{/* <p>
																			<span className="text-gray-500 mr-[2.7rem]">
																				Object
																			</span>{" "}
																			{selectedActivity.action.object}
																		</p> */}
																			<p>
																				<span className="text-gray-500 mr-[4.6rem]">
																					ID
																				</span>{" "}
																				{selectedActivity.action_id}
																			</p>
																		</div>
																		<div className="mt-4">
																			<h3 className="font-medium text-gray-500 mb-2">
																				DATE
																			</h3>
																			<p>
																				<span className="text-gray-500 mr-10">
																					Readable
																				</span>{" "}
																				{formatDate(selectedActivity.occurred_at)}
																			</p>
																		</div>
																		<div className="mt-4">
																			<h3 className="font-medium text-gray-500 mb-2">
																				METADATA
																			</h3>
																			<p>Some meta data</p>
																		</div>
																		<div className="mt-4">
																			<h3 className="font-medium text-gray-500 mb-2">
																				TARGET
																			</h3>
																			<p>{selectedActivity.target_name}</p>
																		</div>
																	</div>
																</div>
															</div>
														</td>
													</tr>
												)}
											</React.Fragment>
										);
									})}
							</React.Fragment>
						))}
					{isFetchingNextPage && <ActivitySkeleton cards={limit} />}
				</tbody>
			</table>
			<button
				className="w-full mt-4 py-2 bg-gray-100 text-gray-500 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
				onClick={() => fetchNextPage()}
				disabled={isFetchingNextPage}
			>
				{isFetchingNextPage ? `Loading More` : `LOAD MORE`}
			</button>
		</div>
	);
};

export default ActivityLog;

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ActivitySkeleton = ({ cards }: { cards: number }) => {
	return Array(cards)
		.fill(0)
		.map(() => {
			return (
				<tr className="border-t cursor-pointer hover:bg-gray-50">
					<td className="p-2 flex items-center">
						<span>
							<Skeleton className="w-8 h-8 rounded-full mr-2" />
						</span>
						<Skeleton width={150} />
					</td>
					<td className="p-2">
						<Skeleton width={150} />
					</td>
					<td className="p-2 text-gray-500">
						{" "}
						<Skeleton width={100} />
					</td>
				</tr>
			);
		});
};

export default ActivitySkeleton;

import { QueryClient, QueryClientProvider } from "react-query";
import ActivityLog from "./components/ActiveLog";

export default function App() {
	const queryClient = new QueryClient();
	return (
		<>
			<QueryClientProvider client={queryClient}>
				<ActivityLog />
			</QueryClientProvider>
		</>
	);
}

import { v4 as uuidv4 } from "uuid";

export const generateUniqueId = () => {
	const uuid = uuidv4().replace(/-/g, "").substring(0, 12); // Remove hyphens and truncate to 12 characters
	return `evt_${uuid}`;
};

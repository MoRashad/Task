import { Parser } from "json2csv";

export async function parseJsonToCsv(data: any[]) {
	const json2csv = new Parser({ header: true });
	return json2csv.parse(data);
}

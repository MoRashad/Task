import express from "express";
import { eventsRouter } from "./routes";

export class App {
	private app: express.Application;
	private port: number;

	constructor(port: number) {
		this.app = express().use(express.json());
		this.port = port;
		this.app.use("/events", eventsRouter);
	}

	public listen() {
		this.app.listen(this.port, () => {
			console.log(`App listening on the port ${this.port}`);
		});
	}
}

const app = new App(3000);
app.listen();

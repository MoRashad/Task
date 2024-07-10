import express from "express";
import { eventsRouter } from "./routes";
import { errorHandler } from "./middleware";
import cors from "cors";

export class App {
	private app: express.Application;
	private port: number;

	constructor(port: number) {
		this.app = express().use(express.json()).use(cors());
		this.port = port;
		this.app.use("/events", eventsRouter);

		this.app.use("*", (req, res) => {
			res.status(404).json({ message: "Not Found" });
		});

		this.app.use(errorHandler);
	}

	public listen() {
		this.app.listen(this.port, () => {
			console.log(`App listening on the port ${this.port}`);
		});
	}
}

const app = new App(3000);
app.listen();

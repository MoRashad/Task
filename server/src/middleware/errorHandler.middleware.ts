import { NextFunction, Request, Response } from "express";

const errorHandler = (error: any, req: Request, res: Response, next: NextFunction) => {
	console.error(`${error.name}:  ${error.message}`);
	console.error(`${JSON.stringify(error)}`);
	console.log(error);
	console.log(error.stack);
	return res.status(error.errorStatusCode || 500).send(error);
};

export default errorHandler;

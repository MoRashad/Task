import { NextFunction, Request, Response } from "express";
import { Schema } from "yup";

export const validateRequest = (schema: Schema) => async (req: Request, res: Response, next: NextFunction) => {
	try {
		await schema.validate({
			body: req.body,
			query: req.query,
			params: req.params,
		});
		return next();
	} catch (error: any) {
		console.error(`${error.name}:  ${error.message}`);
		return res.status(400).send({ name: error.name, message: error.message });
	}
};

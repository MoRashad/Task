type errorMessage = {
	message: string;
	code: number;
	status: string;
	data?: any;
};

export default class CustomError {
	public message: string;
	public code: number;
	public status: string;
	public data?: any;
	constructor({ message, code, status, data }: errorMessage) {
		this.message = message;
		this.code = code;
		this.status = status;
		this.data = data;
	}

	public getErrorBody() {
		return {
			message: this.message,
			code: this.code,
			status: this.status,
			data: this.data,
		};
	}

	public getErrorStatusCode() {
		return this.code;
	}
}

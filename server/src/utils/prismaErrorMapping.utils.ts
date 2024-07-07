function prismaErrorMapping(error: any) {
	console.error(JSON.stringify(error));
	switch (error.code) {
		case "P2002":
			return {
				errorStatusCode: 400,
				message: `Duplicate field value: ${error.meta.target}`,
				errorCode: "LN_DB_001",
			};
		case "P2014":
			return {
				errorStatusCode: 400,
				message: `Invalid ID: ${error.meta.target}`,
				errorCode: "LN_DB_002",
			};
		case "P2003":
			return {
				errorStatusCode: 400,
				message: `Invalid input data: ${error.meta.target}`,
				errorCode: "LN_DB_003",
			};
		default:
			return {
				errorStatusCode: 500,
				message: "Somthing went wrong! ",
				errorCode: "LN_DB_004",
			};
	}
}

export default prismaErrorMapping;

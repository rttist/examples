export interface LoggerCtor {
	new <TCategory>(): ILogger;
}

export interface ILogger {
	log(message: string, ...args: any[]): void;
}

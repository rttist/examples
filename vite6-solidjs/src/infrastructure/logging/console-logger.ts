import { getType } from "rttist/typelib";
import type { ILogger } from "./logger";

export class ConsoleLogger<TCategory> implements ILogger {
	private readonly category: string;

	constructor() {
		const categoryType = getType<TCategory>();
		this.category = categoryType.name;
	}

	log(message: string, ...args: any[]): void {
		console.log(`[${this.category}]:`, message, ...args);
	}
}

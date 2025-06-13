import { Metadata, getType } from "rttist/typelib";
import type { ILogger, LoggerCtor } from "./logger";

const loggerType = getType<ILogger>();
const firstLoggerType = Metadata.findType(
	(t) => t.isClass() && !t.abstract && t.exported && t.isDerivedFrom(loggerType)
);

export function createLogger<TCategory>(): Promise<ILogger> {
	if (firstLoggerType === undefined) {
		throw new Error("No logger type found");
	}

	// NOTE: This Promise is hotfix for error caused by RTTIST generating the [[type]] property
	// on prototype of functions; async functions has no prototype - will be fixed soon.
	return new Promise(async (resolve, reject) => {
		try {
			const module = await firstLoggerType.module.import();
			const Logger = module?.[firstLoggerType.name] as LoggerCtor;

			if (Logger === undefined) {
				throw new Error(`Logger type ${firstLoggerType.name} not found in module`);
			}

			resolve(new Logger<TCategory>());
		} catch (error) {
			reject(error);
		}
	});
}

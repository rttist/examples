import { Metadata, getType } from "rttist/typelib";
import type { ILogger, LoggerCtor } from "./logger";

const loggerType = getType<ILogger>();
const firstLoggerType = Metadata.findType(
	(t) => t.isClass() && !t.abstract && t.exported && t.isDerivedFrom(loggerType)
);

export async function createLogger<TCategory>(): Promise<ILogger> {
	if (firstLoggerType === undefined) {
		throw new Error("No logger type found");
	}

	const module = await firstLoggerType.module.import();
	const Logger = module?.[firstLoggerType.name] as LoggerCtor;

	if (Logger === undefined) {
		throw new Error(`Logger type ${firstLoggerType.name} not found in module`);
	}

	return new Logger<TCategory>();
}

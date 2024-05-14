import 'rttist/typelib'; // TODO remove this: a future version of rttist will inject this automatically

import { Application } from "./framework/Application";

new Application()
	.run({ port: 8080 })
	.catch(err => {
		console.error(err);
	});
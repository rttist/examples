import styles from "./App.module.css";
import { createLogger } from "./infrastructure/logging/logger-factory";
import logo from "./logo.svg";

type AppCategory = never;

const logger = await createLogger<AppCategory>();
// const logger = await createLogger<typeof App>(); // typeof App does not work yet so I created a new type AppCategory just to demonstrate the usage

export function App() {
	logger.log("App component initialized");

	return (
		<div class={styles.App}>
			<header class={styles.header}>
				<img src={logo} class={styles.logo} alt="logo" />
				<p>
					Edit <code>src/App.tsx</code> and save to reload.
				</p>
				<a
					class={styles.link}
					href="https://github.com/solidjs/solid"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn Solid
				</a>
			</header>
		</div>
	);
}

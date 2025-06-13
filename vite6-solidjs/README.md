# Usage

```bash
pnpm install
```


```bash
npm run dev
# or
npm start
```


# How was this example created?

Project created from SolidJS TS template:
```bash
pnpm dlx degit solidjs/templates/ts vite6-solidjs
```

`typegen` installed:
```bash
pnpm install @rttist/typegen@rc -D
# or globally
pnpm install @rttist/typegen@rc -g
```

Initialization of RTTIST:
```bash
rttist init
# or
typegen init
# or if you have installed it locally
pnpm exec rttist init
```

Vite plugin installed:
```bash
pnpm install vite-plugin-rttist@rc -D
```

Vite config modified:
```typescript
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import { rttistPlugin } from 'vite-plugin-rttist'; // <-- added

export default defineConfig({
    plugins: [
        rttistPlugin({ // <-- added
            packageInfo: {name: 'vite6-solidjs', rootDir: __dirname},
            projectRoot: __dirname,
        }), 
        solidPlugin()
    ],
    server: {
        port: 3000,
    },
    build: {
        target: 'esnext',
    },
});
```

`reflect.config.json` edited (include of TSX files):
```json5
{
	"$schema": "https://rttist.org/schema.json",
	"metadata": {
		"include": [
			"src/**/*.ts",
			"src/**/*.tsx" // <-- added
		],
		"encode": false,
		"exclude": []
	},
	"logLevel": "Info"
}
```

Installed RTTIST runtime:
```bash
pnpm install rttist@rc
```

Changed `moduleResolution` in `tsconfig.json` to `bundler`:
```json5
{
    "compilerOptions": {
        // ...
        "moduleResolution": "bundler", // <-- changed
        // ...
    }
}
```

And that's it! Now you can use RTTIST.
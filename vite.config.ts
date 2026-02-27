import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import Icons from 'unplugin-icons/vite';

export default defineConfig({
	plugins: [sveltekit(), Icons({ compiler: 'svelte' })],
	css: {
		preprocessorOptions: {
			scss: {
				api: 'modern-compiler',
				additionalData: `@use 'variables' as *;`,
				loadPaths: ['./src/lib/styles'],
			},
		},
	},
	server: {
		fs: {
			allow: ['./src', './static'],
		},
		// ADD THIS SECTION BELOW
		watch: {
			ignored: [
				'**/.pnpm-store/**',
				'**/node_modules/**',
				'**/.svelte-kit/**',
				'**/.git/**',
				'.gitignore',
			],
		},
	},
});

import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
	plugins: [
		nodePolyfills({
			include: ['crypto', 'events', 'stream', 'util'],
			globals: { Buffer: true }
		}),
		sveltekit()
	]
});

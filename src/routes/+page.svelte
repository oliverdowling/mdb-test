<script lang="ts">
	import { readDatabase } from '$lib/database';

	async function fileInputChange(event: Event) {
		const input = event.target as HTMLInputElement;
		if (input.files === null || input.files.length === 0) {
			console.warn('Empty file list');
			return;
		}

		for (const file of input.files) {
			readDatabase(file);
		}
	}
</script>

<input type="file" on:change={fileInputChange} />

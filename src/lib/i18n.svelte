<script lang="ts">
	import { dev } from '$app/environment';
	import { page } from '$app/stores';
	import { getI18nContext } from '$lib/i18n-util.js';
	import InPlaceEdit from './InPlaceEdit.svelte';

	export let name: string;

	// TODO add ability to disable this for routes with more params - maybe via i18n-scope
	const autoUpdatePagePath = true;
	
	let msg = getI18nContext().translateForPage($page, name);

	function submit(e: CustomEvent) {
		const message = e.detail.trim();
		console.log(`saving ${name} '${message}'`);

		const pagePath = autoUpdatePagePath ? $page.url.pathname : null;

		fetch('/i18n', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				category: msg.category,
				name,
				lang: msg.lang,
				message,
				pagePath
			})
		});
	}
</script>

{#if dev}
	<InPlaceEdit bind:value={msg.text} placeholder={msg.isDefault} on:submit={submit} />
{:else}
	{msg.text}
{/if}

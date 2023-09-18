<script lang="ts">
	import { dev } from "$app/environment";
	import { page } from "$app/stores";
	import { getI18nContext, getPageLang } from "$lib/i18n-util.js";
	import I18nScope from "./i18n-scope.svelte";
	import I18n from "./i18n.svelte";

	/**
	 * Opinionated utility to provide a page with content.
	 */

	/**
	 * The default route ID (of the english page).
	 */
	export let id: string;

	const paths = getI18nContext().getPaths(id);

	let pageTitle = getI18nContext().translate(id, getPageLang($page), 'title');
	let title = `${pageTitle} | Versiobit`;

	let description = getI18nContext().translate(id, getPageLang($page), 'description');
	if (description == null && !dev) throw new Error(`I18n 'description' missing for ${id}`);
</script>

<svelte:head>
    <title>{title}</title>
	<meta name="description" content={description}>

	<link rel="canonical" href={$page.url.pathname} />

	{#each Object.keys(paths) as lang}
	<link rel="alternate" hreflang={lang} href={paths[lang]} />
	{/each}
</svelte:head>

<I18nScope category={id}>

	{#if description == null}
	<div class="alert">
		<p class="text-xl font-bold">Set page meta description:</p>
		<I18n name="description"/>
	</div>
	{/if}

	<slot/>

</I18nScope>

<style>
	.alert {
		padding: 10px;
		margin: 10px;
		border: dashed red;
		background-color: #f7cfa2;
	}
</style>

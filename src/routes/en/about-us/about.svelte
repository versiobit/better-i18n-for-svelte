<script lang="ts">
	import { page } from '$app/stores';
	import { getPageLang } from '$lib/i18n-util.js';
	import I18n from '$lib/i18n.svelte';
	import I18nPage from '$lib/i18n-page.svelte';

	const lang = getPageLang($page);
</script>

<I18nPage id="/en/about-us">
	<h1><I18n name="title" /></h1>

	<p><I18n name="description" /></p>
	<ul>
		<li><I18n name="feature.title"/></li>
		<li><I18n name="feature.url"/></li>
		<li><I18n name="feature.alternate"/></li>
	</ul>

	{#if lang == 'en'}
	<a href="/de/ueber-uns/">Go to the german about page</a>	
	{:else}
	<a href="/en/about-us/">Go to the english about page</a>	
	{/if}
	
	
</I18nPage>

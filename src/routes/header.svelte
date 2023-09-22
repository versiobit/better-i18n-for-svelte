<script lang="ts">
	import { page } from '$app/stores';
	import I18nScope from '$lib/i18n-scope.svelte';
	import I18n from '$lib/i18n.svelte';
	
	const pageUrl = $page.url;
</script>

<div style="font-size:10px; margin-bottom:18px">Page URL: {pageUrl}</div>

<I18nScope category="/">
<div class="">
	<I18n name="navTitle"/>:
	<ul>
		<li><a href="/en/simple/">Simple page</a> (I18n component demo)</li>
		<li><a href="/en/about-us/">About us</a> (I18nPage component demo)</li>
	</ul>
</div>
</I18nScope>
<script lang="ts">
	import { page } from '$app/stores';
	import { getPageLang } from '$lib/i18n-util.js';

	const lang = getPageLang($page);
</script>

<div class="">
	Navigation:
	<ul>
		<li><a href="/en/simple/">Simple page</a></li>
		<li><a href="/en/about-us/">About us (I18nPage component)</a></li>
	</ul>
</div>

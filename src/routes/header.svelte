<script lang="ts">
	import { page } from '$app/stores';
	
	const currentUrl = $page.url;
</script>

<div>Current URL: {currentUrl}</div>

<div class="">
	Navigation:
	<ul>
		<li><a href="/en/simple/">Simple page</a></li>
		<li><a href="/en/about-us/">About us (I18nPage component)</a></li>
	</ul>
</div>

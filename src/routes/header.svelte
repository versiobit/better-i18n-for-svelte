<script lang="ts">
	import { page } from '$app/stores';
	
	const pageUrl = $page.url;
</script>

<div style="font-size:10px; margin-bottom:18px">Page URL: {pageUrl}</div>

<div class="">
	Navigation:
	<ul>
		<li><a href="/en/simple/">Simple page</a> (I18n component demo)</li>
		<li><a href="/en/about-us/">About us</a> (I18nPage component demo)</li>
	</ul>
</div>

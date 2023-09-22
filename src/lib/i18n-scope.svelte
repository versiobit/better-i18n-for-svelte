<script lang="ts">
	import { getI18nContext } from '$lib/i18n-util.js';
	
	/**
	 * The category to use within this scope.
	 *
	 * Note: The category is different from the routeId. the route might be '/de/preise' and be served by a i18n.json file in '/[lang]/pricing/'.
	 * Footer and other shared components will load data from a category disconnected from any route.
	 */
	export let category: string;

	const i18n = getI18nContext();

	function enterScope() {
		i18n.enterScope({ category });
		return '';
	}
</script>

{enterScope()}
<slot />

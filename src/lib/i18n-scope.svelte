<script lang="ts">
	import { afterUpdate, beforeUpdate } from "svelte";
	import { getI18nContext } from "$lib/i18n-util.js";
	import { browser } from "$app/environment";

	/**
	 * The category to use within this scope.
     * 
     * Note: The category is different from the routeId. the route might be '/de/preise' and be served by a i18n.json file in '/[lang]/pricing/'.
     * Footer and other shared components will load data from a category disconnected from any route.
	 */
	export let category: string;
    
	const i18n = getI18nContext();

    let outerScope: string | null;

    function enterScope() {
        // console.log(`entering i18n scope ${category}`);
        outerScope = i18n.getI18nCategoryOverwrite();
        i18n.setI18nCategoryOverwrite(category);
        return '';
    }

    function leaveScope() {
        // console.log(`leaving i18n scope - restoring ${category}`);
        i18n.setI18nCategoryOverwrite(outerScope);
        return '';
    }

    if (browser) {
        beforeUpdate(enterScope);
        afterUpdate(leaveScope);
    }    
</script>

{!browser ? enterScope() : ''}
<slot/>
{!browser ? leaveScope() : ''}

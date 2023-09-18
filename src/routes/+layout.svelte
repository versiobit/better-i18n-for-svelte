<script lang="ts">
	import { browser } from '$app/environment';
	import { getI18nContext, initI18nContext } from '$lib/i18n-util.js';
	import Header from './header.svelte';
	import { serverI18nData } from './layout-i18n.js';

	let i18nSubstrate: string = "";
	if (browser) {
		const el = document.querySelector('#i18n-substrate');
		i18nSubstrate = el!.textContent as string;
	}

	const serverI18nDataAvailable = Object.keys(serverI18nData).length > 0;
	if (serverI18nDataAvailable) {
		// only possible in dev mode
		// console.log("i18n init with server messages");
		initI18nContext(serverI18nData);	
	} else {
		// in browser context, use substrated i18n
		const i18nData = JSON.parse(i18nSubstrate);
		// console.log(`i18n init with substrate`, i18nData)
		initI18nContext(i18nData);
	}

	function updateSubstrate() {
		if (!browser) {
			i18nSubstrate = getI18nContext().getI18nSubstrate();
		}
		return "";
	}
</script>

<Header/>

<slot />

<!-- as the last action update the substrate (only relevant on the server) -->
{updateSubstrate()}
<span id="i18n-substrate" style="display:none">{i18nSubstrate}</span>

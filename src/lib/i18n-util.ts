import { getContext, setContext } from 'svelte';
import { I18nContext } from './i18n-context.js';
import { setI18nConfig, type I18nConfig, getI18nConfig } from './config.js';

const i18nContextKey = {};

export function getI18nContext(): I18nContext {
	const i18n = getContext(i18nContextKey);
	if (!i18n) {
		console.error(`I18nContext not initialized`);
	}

	return i18n as I18nContext;
}

export function initI18nContext(i18nData: any, i18nConfig?: I18nConfig) {
	if (i18nConfig) setI18nConfig(i18nConfig);
	if (getI18nConfig().debug) console.log("i18n: init", getI18nConfig());

	setContext(i18nContextKey, new I18nContext(i18nData));
}

export function getPageLang(page: any): string {
	if (page.params.lang) {
		return page.params.lang;
	} else {
		return getLangFromPath(page.route.id!!) || getI18nConfig().defaultLanguage;
	}
}

export function getLangFromPath(path: string): string | null {
	const langMatch1 = /\/(\w\w)$/.exec(path);
	if (langMatch1) {
		return langMatch1[1];
	}

	const langMatch2 = /\/(\w\w)\/.*/.exec(path);
	if (langMatch2) {
		return langMatch2[1];
	}

	return null;
}

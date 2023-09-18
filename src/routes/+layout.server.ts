import { loadI18nData } from '$lib/server/loader.js';
import type { LayoutServerLoad } from './$types';
import { serverI18nData } from './layout-i18n.js';

export const load: LayoutServerLoad = (event => {
    const i18nData = loadI18nData();
    Object.assign(serverI18nData, i18nData);
    return {};
});

import { getPageLang } from '$lib/i18n-util.js';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = ({ event, resolve }) => {
	const lang = getPageLang(event);

	return resolve(event, {
		transformPageChunk: ({ html }) => {
			if (lang) html = html.replace('%lang%', lang);
			return html;
		}
	});
};

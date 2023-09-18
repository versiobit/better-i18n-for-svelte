import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { updateI18nData } from '$lib/server/updater.js';

export const POST = (async ({ request }) => {
    const { category, name, lang, message, pagePath } = await request.json();
    updateI18nData(category, name, lang, message, pagePath);
    return json({});
}) satisfies RequestHandler;

import { getCategoryI18nFilePath, loadI18nCategoryData } from "./loader";
import fs from "fs";

/**
 * Updates the given i18n message.
 * Optionally also updates the page path (so we know about the language variants).
 */
export function updateI18nData(category: string, name: string, lang: string, message: string, pagePath: string | null) {
    // TODO fix path injection issue - category is unsafe
    console.log(`Storing i18n message for category '${category}', name: '${name}', lang: '${lang}', message: '${message}'`);
    const categoryData = loadI18nCategoryData(category);

    // update the message
    const messages = categoryData.messages || {};
    messages[name] = messages[name] || {};
    messages[name][lang] = message;
    categoryData.messages = messages;

    // optionally also update the page path
    if (pagePath) {
        const paths = categoryData.paths || {};
        paths[lang] = pagePath;
        categoryData.paths = paths;
    }

    storeI18nData(category, categoryData);
}

export function storeI18nData(category: string, data: any) {
    const jsonPath = getCategoryI18nFilePath(category);
    fs.writeFileSync(jsonPath, JSON.stringify(data, null, 2));
}

import { getPageLang } from "./i18n-util.js";
import type { Page } from "@sveltejs/kit";

function getOrCreate(obj: any, key: string) {
    obj[key] = obj[key] || {};
    return obj[key];
}

export class I18nContext {
    private categoryOverwrite: string | null = null;
    private data: any;
    private substrate: any;

    constructor(i18nData: any) {
        this.data = i18nData;
        this.substrate = {};
    }

    translateForPage(page: Page, name: string) {
        const routeId = page.route.id!!;
        const lang = getPageLang(page);
        if (!lang) {
            throw new Error(`Page lang unknown`);
        }
        
        const category = this.getI18nCategoryOverwrite() || routeId;
        const messageId = `${category}:${lang}:${name}`;
        const text = this.translate(category, lang, name) || messageId;
        console.log(`i18n translated ${messageId} to '${text}'`)

        return {
            category,
            lang,
            text,
            isDefault: text === messageId
        };
    }

    translate(category: string, lang: string, name: string): string | null {
        let text = null;
        const categoryData = this.data[category];

        if (categoryData?.messages && categoryData?.messages[name]) {
            text = categoryData?.messages[name][lang];
            if (text === undefined || text.trim().length == 0) text = null;
        }

        if (text !== null) this.updateSubstrate(category, lang, name, text);

        return text;
    }

    /**
     * Returns the paths under which the given category is reachable.
     */
    getPaths(category: string): any {
        const paths = this.data[category]?.paths;
        if (paths) {
            const categoryData = getOrCreate(this.substrate, category);
            categoryData.paths = paths;
        }
        return paths || {};
    }

    private updateSubstrate(category: string, lang: string, name: string, text: string) {
        const categoryData = getOrCreate(this.substrate, category);
        const msgs = getOrCreate(categoryData, 'messages');
        const nameObj = getOrCreate(msgs, name);
        nameObj[lang] = text;
    }

    setI18nCategoryOverwrite(category: string | null) {
        this.categoryOverwrite = category;
    }

    getI18nCategoryOverwrite(): string | null {
        return this.categoryOverwrite;
    }

    getI18nSubstrate(): string {
        return JSON.stringify(this.substrate);
    }

}

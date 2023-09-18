import fs from "fs";
import path from "path";

/**
 * Loads and returns all i18n data for all categories/pages.
 */
export function loadI18nData() {
    const i18nData: any = {};

    findDirectories('src/routes')
        .filter(path => !path.startsWith('i18n'))
        .map(path => `/${path}`)
        .forEach(category => {
            i18nData[category] = loadI18nCategoryData(category);
        });

    // console.log("loaded i18nMessages", i18nMessages);
    return i18nData;
}

function findDirectories(parentDir: string) {
    const foundDirectories: string[] = [''];

    function findSubdirectories(currentDir: string) {
        const files = fs.readdirSync(currentDir);

        files.forEach((file: string) => {
            const filePath = path.join(currentDir, file);
            const isDirectory = fs.statSync(filePath).isDirectory();

            if (isDirectory) {
                foundDirectories.push(path.relative(parentDir, filePath));
                findSubdirectories(filePath);
            }
        });
    }

    findSubdirectories(parentDir);
    return foundDirectories;
}

export function loadI18nCategoryData(category: string) {
    const path = getCategoryI18nFilePath(category);
    try {
        const json = fs.readFileSync(path, { encoding: 'utf8', flag: 'r' });
        return JSON.parse(json);
    } catch (err: any) {
        // console.log(`Failed to load i18n data for route ${routeId}: ${err.message}`);
        return {};
    }
}

export function getCategoryI18nFilePath(category: string) {
    return `src/routes${category}/i18n.json`;
}

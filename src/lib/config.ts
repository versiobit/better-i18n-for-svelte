export const defaultConfig: I18nConfig = {
	debug: false,
	defaultLanguage: 'en',
	siteUrl: null
};

let config: I18nConfig = defaultConfig;

export function getI18nConfig(): I18nConfig {
    return config;
}

export function setI18nConfig(_config: I18nConfig) {
    config = _config;
}

export interface I18nConfig {
	debug: boolean;

	defaultLanguage: string;

	/**
	 * e.g. used to prefix the URL in link alternate elements.
	 */
	siteUrl: string | null
}
